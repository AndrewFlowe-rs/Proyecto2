
const { loadData } = require('../../data')
module.exports = (req,res) => {
const { id }  = req.params
const products = loadData("products")
const productF = products.find(p => p.id === +id);
res.render("product/productCart",{product: productF})
}

  