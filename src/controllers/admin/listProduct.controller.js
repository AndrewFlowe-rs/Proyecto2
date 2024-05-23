const { loadData } = require("../../data")
const db = require('../../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res)=> {
   const isAdmin = req.params.name_role
   const isRegular = req.params.name_role

   
   const userLogin = req.session.user
    db.Product.findAll()
    .then((products)=>{
        res.render('admin/productList', { 
        products,
        userLogin,
         isAdmin,
         isRegular,
        toThousand
    })
    
    })
}
