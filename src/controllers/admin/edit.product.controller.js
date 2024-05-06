const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../database/models")
module.exports= (req,res) => {
   
   db.Product.findByPk(req.params.id)
   .then(productos =>{
    res.render('admin/edit-product',{p:productos,toThousand})
   })
    

}