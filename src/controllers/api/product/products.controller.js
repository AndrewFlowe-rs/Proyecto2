const db = require('../../../database/models')

module.exports = (req,res)=> {
 db.Product.findAll()
 .then((products)=>{
    
    res.json(products)
 })

}
