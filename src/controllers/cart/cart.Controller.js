const { loadData } = require('../../data');

function filterByCategory(product, category) {
    return product.category.toLowerCase().replace(/\s/g, '') === category.toLowerCase();
}

module.exports = (req, res) => {
    const category = req.params.category.replace(/\s/g, '').toLowerCase();
    const categoryWithSpaces = req.params.category; // Mantiene la categoría con espacios en la vista
    const products = loadData('products');

    const categoryProducts = products.filter(product => filterByCategory(product, category));

    res.render('product/productCart', { category: categoryWithSpaces, products: categoryProducts });
};
