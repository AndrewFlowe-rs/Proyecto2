const { readData } = require("../../database")




module.exports = (req,res) => {
    const products = readData()
    res.render('product/productCart', {products})
    
    }

