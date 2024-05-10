const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        // Obtener el nombre de la categoría de los parámetros de la solicitud
        const categoryName = req.params.categoryName;

        // Consulta a la base de datos para obtener los productos de la categoría especificada
        const categoryProducts = await db.Product.findAll({
            where: {
                categoryName: categoryName
            }
        });

        // Renderizar la vista con los productos y el nombre de la categoría
        res.render('product/productsByCategory', { category: categoryName, products: categoryProducts });
    } catch (error) {
        // Manejo de errores
        console.error('Error al obtener productos por categoría:', error);
        res.status(500).send('Error al obtener productos por categoría');
    }
};
