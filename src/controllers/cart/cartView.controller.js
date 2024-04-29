const {loadData} = require('../../data')
module.exports =  (req, res) => {
    const products = loadData('products');

    res.render('product/cartView', {products})
};