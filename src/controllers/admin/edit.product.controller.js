const { loadData } = require('../../data')

module.exports = (req,res)=>{
    const {id} = req.params;
    const products = loadData('products')
res.render("admin/edit-product", {p : products})
}