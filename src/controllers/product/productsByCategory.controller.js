const { loadData } = require('../../data');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function filterByCategory(product, category) {
    return product.category.toLowerCase().replace(/\s/g, '') === category.toLowerCase();
}

module.exports = (req, res) => {
    const category = req.params.category.replace(/\s/g, '').toLowerCase();
    const categoryWithSpaces = req.params.category; // Mantiene la categoría con espacios en la vista
    const products = loadData('products');

    const categoryProducts = products.filter(product => filterByCategory(product, category));

    res.render('product/productsByCategory', { category: categoryWithSpaces, products: categoryProducts, toThousand });
};
