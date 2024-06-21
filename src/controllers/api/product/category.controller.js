const db = require("../../../database/models")
module.exports = async (req, res) => {
        try {
            const categoryName = req.params.categoryName;
    
            const categoryProducts = await db.Product.findAll({
                where: {
                    categoryName: categoryName
                }
            });
    
            res.json({ category: categoryName, products: categoryProducts });
        } catch (error) {
            console.error('Error al obtener productos por categoría:', error);
            res.status(500).send('Error al obtener productos por categoría');
        }
    };
    
 
 