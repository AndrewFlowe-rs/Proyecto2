const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../database/models")
module.exports= (req,res) => {
   
    res.render('product/cartAdd')
   }
    

