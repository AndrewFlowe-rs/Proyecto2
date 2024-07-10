const { log } = require('console');
const db = require('../../database/models');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const userLogin = res.locals.userLogin;

    if (!userLogin) {
        return res.redirect('aut/login'); 
    }

    const { id } = req.params;
    const { name, price, description, categoryName} = req.body;
    const image = req.file;

    try {
        let product = await db.Product.findByPk(id);

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        product.name = name ? name.trim() : product.name;
        product.price = +price;
        product.description = description ? description.trim() : product.description;
        product.categoryName = categoryName ? categoryName.trim() : product.categoryName;
        product.image = image ? image.filename : product.image;

        await product.save();

        if (image) {
            const pathBefore = path.join(__dirname, `../../../public/design/ImgProducts/${product.image}`);
            const existFile = fs.existsSync(pathBefore);
            if (existFile) {
                fs.unlinkSync(pathBefore);
            }
        }

        console.log(product);
        res.redirect(`/detalle/${id}`);

    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error interno del servidor al actualizar el producto');
    }
};
