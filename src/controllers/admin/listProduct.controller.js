const db = require('../../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const userLogin = res.locals.userLogin;

    if (!userLogin) {
        return res.redirect('/perfil'); 
    }

   
    db.User.findByPk(userLogin.id)
        .then(user => {
            if (!user) {
                return res.redirect('/login'); 
            }

            const isAdmin = userLogin.role === 'Admin';
            const isRegular = userLogin.role === 'Regular';
            db.Product.findAll()
                .then(products => {
                    res.render('admin/productList', { 
                        products,
                        userLogin,
                        isAdmin,
                        isRegular,
                        toThousand
                    });
                });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
}
