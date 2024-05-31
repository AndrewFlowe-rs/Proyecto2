const db = require('../../database/models');

module.exports = (req, res) => {
    const userLogin = res.locals.userLogin;

    if (!userLogin) {
        return res.redirect('/aut/login'); 
    }
    db.Product.findAll()
        .then(products => {
            res.render("admin/newProduct", { products });
        })
        .catch(error => {
            console.error('Error al obtener los productos:', error);
            res.status(500).send('Error interno del servidor al obtener los productos');
        });
};
