const db = require('../../database/models');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, categoryName} = req.body;
    const image = req.file;

    try {
        const product = await db.Product.findByPk(id);


        product.name = name ? name.trim() : name;
        product.price = +price;
        product.description = description ? description.trim() : description;
        product.categoryName = categoryName ? categoryName.trim() : categoryName;
        product.image = image ? image.filename : product.image;
       

        if (image && product.image) {
            await fs.unlink(path.join(__dirname, '../../../public/design/ImgProducts', product.image));
        }

        await product.save();

        res.redirect(`/detalle/${id}`);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error interno del servidor al actualizar el producto');
    }
};
