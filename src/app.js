require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
const port = 3031;
const methodOverride =  require('method-override');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const checkSession = require("./middlewares/validations/checkSession");
const checkCookie = require('./middlewares/validations/checkCookie');
const cors = require('cors');
const passport = require("passport")
const { configServiceLogInGoogle } = require("./service/google.service");

// CONFIG

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

// MIDDLEWARE
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static("../public/design"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: false 
    }
}));
app.use(cookieParser());

configServiceLogInGoogle();

app.use(passport.initialize())
app.use(passport.session())


app.use(checkCookie);
app.use(checkSession);



// ROUTES
const adminRoutes = require('./routes/admin.routes')
const otherRoutes = require('./routes/other.routes');
const authRoutes = require('./routes/authentication.routes');
const cartRoutes = require('./routes/cart.routes');
const prodRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/users.routes')



// ROUTERS
app.use('/', otherRoutes);
app.use('/aut', authRoutes);
app.use('/productos', prodRoutes)
app.use('/detalle', prodRoutes);
 app.use('/carrito', cartRoutes);
app.use ('/admin',adminRoutes);
app.use('/perfil', userRoutes)

// Apis R.
const otherApis = require('./routes/api/other.api')
const userRoutesApi = require('./routes/api/userRoutes.api')
const apiProducts = require('./routes/api/productRoutes.api')
const apiCategory = require('./routes/api/categorias.api')
const apiCart = require('./routes/api/cartRoutes.api')
// // ROUTEOS API
app.use('/api', otherApis)
app.use('/api/user', userRoutesApi)
app.use('/api/products', apiProducts)
app.use('/api/cart', apiCart)
app.use('/api/categorias', apiCategory)
app.use((req,res, next) => {
    res.status(404).render("other/error")
  })
  



app.listen(port, () => console.log(`http://localhost:${port}`))
