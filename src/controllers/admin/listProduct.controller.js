const { loadData } = require("../../data")
const db = require('../../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res)=> {
    // const products = loadData()
   const userLogin = req.session.user
    db.Product.findAll()
    .then((products)=>{
        res.render('admin/productList', { 
        products,
        userLogin,
        toThousand
    })
    
    })
}
