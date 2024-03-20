const { readData } = require("../../data")




module.exports = (req,res) => {
    const products = readData()
    res.render('admin/productList', {products})
    
    }

