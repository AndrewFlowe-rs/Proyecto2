const { loadData } = require('../../data')

module.exports = (req,res)=>{
    const {id} = req.params;
    const products = loadData('products')
    const findId = products.find(p => p.id === +id)

res.render("admin/edit-product", {p : products, findId })
}