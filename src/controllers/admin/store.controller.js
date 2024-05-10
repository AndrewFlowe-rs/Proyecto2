const db = require('../../database/models')


module.exports = (req,res) => {
    const {name, price, description, category} = req.body
    const image = req.file
    // const products = loadData('products');
 
   db.Product.create({
    name:name.trim(),
    price:+price,
    description:description.trim(),
    categoryName: category.trim(),
    categoryId: +category,
    image: image ? image.filename : ''

   })

   .then((p=>{return res.redirect('/admin')}))
    }