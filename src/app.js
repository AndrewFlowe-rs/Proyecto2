const express = require("express");
const app = express();
const path = require("path");
const port = 3031;
const methodOverride =  require('method-override');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const checkSession = require("./middlewares/validations/checkSession");
const checkCookie = require('./middlewares/validations/checkCookie');

// CONFIG

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))


// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static("../public/design"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({secret:'palabra secreta'}));
app.use(cookieParser());



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



app.listen(port, () => console.log(`http://localhost:${port}`))
