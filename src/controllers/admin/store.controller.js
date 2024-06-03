const db = require('../../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res) => {
    const userLogin = res.locals.userLogin;

    if (!userLogin) {
        return res.redirect('aut/login'); 
    }
    const {name, price, description, categoryName,category} = req.body
    const image = req.file
    // const products = loadData('products');
 
   db.Product.create({
    name:name.trim(),
    price:+price,
    description:description.trim(),
    categoryName: categoryName.trim(),
    categoryId: +category,
    image: image ? image.filename : ''

   })

   .then(p => {
    return res.render('product/productDetail', { p ,toThousand});
})
.catch(error => {
    console.error("Error al crear el producto:", error);
    res.status(500).send("Error al crear el producto");
});
    }