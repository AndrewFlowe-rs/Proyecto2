const { Op } = require('sequelize');
const db = require('../../../database/models');

module.exports = async (req, res) => {
    try {
        const { name } = req.query;
        
        const whereCondition = name ? { name: { [Op.like]: `%${name}%` } } : {};

        const categories = await db.Categoty.findAll({
            where: whereCondition
        });

        console.log('Categories fetched:', categories);

        if (!categories.length) {
            return res.status(404).json({
                error: "No categories found"
            });
        }

        return res.status(200).json({
            data: categories
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
}
