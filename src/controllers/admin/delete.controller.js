const { readData } = require("../../data");

module.exports = (req, res) => {
    const { id } = req.params;
    const products = readData()

    const productFind = products.find(p => p.id === +id)
    
    res.render('./admin/deleteProduct', {
        product: productFind
    })
}