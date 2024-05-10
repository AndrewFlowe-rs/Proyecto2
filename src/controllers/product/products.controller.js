// const { loadData } = require("../../data")
const db = require('../../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res)=> {
    // const products = loadData()
 db.Product.findAll()
 .then((products)=>{
    
    res.render('product/products', { 
        products,
        toThousand
    })
 })

}
