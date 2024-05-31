
const db = require('../../database/models');

module.exports = (req, res) => {
    if (!req.session.userLogin) {
        return res.redirect('/aut/login');
    }

    const productId = req.params.id;

    db.Product.findByPk(productId)
        .then(product => {
            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }

            res.render('admin/edit-product', { product });
        })
        .catch(error => {
            console.error('Error al obtener el producto:', error);
            res.status(500).send('Error interno del servidor al obtener el producto');
        });
};
