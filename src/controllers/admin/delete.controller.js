
const db = require("../../database/models");

module.exports = (req, res) => {

       
       db.Product.findByPk(req.params.id)
       .then(productos =>{
        res.render('admin/deleteProduct',{p:productos})
       })
        
    
    }

