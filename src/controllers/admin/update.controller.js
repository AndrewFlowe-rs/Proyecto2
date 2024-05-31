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
        const product = await db.Product.findByPk(id);
        const imageFirst= image;
        await db.Product.update(
            {
                name : name ? name.trim() : name,
                price : +price,
                description : description ? description.trim() : description,
                categoryName : categoryName ? categoryName.trim() : categoryName,
                image : image ? image.filename : product.image,
            },
            {
                where: { id },
            }
        );

        if (image && imageFirst) {
            const pathBefore = path.join(__dirname, `../../../public/design/ImgProducts/${imageFirst}`);
            const existFile = fs.existsSync(pathBefore);
            if (existFile) {
                fs.unlinkSync(pathBefore);
            }
        }

        res.redirect(`/detalle/${id}`);      

    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error interno del servidor al actualizar el producto');
    }
};
