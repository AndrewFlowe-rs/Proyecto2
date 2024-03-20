const { readData, saveData } = require('../../data')


module.exports = (req,res) => {
    const {name, price, description, category} = req.body

    const image = req.file
    const products = readData();
 
    const nuevoID = products[products.length - 1].id + 1

    const nuevoProducto = {
        id: nuevoID,
        name: name.trim(),
        price: +price,  
        description: description.trim(),
        category: category.trim(),
        image: image ? image.filename : "default-image.png"
        
    };
    products.push(nuevoProducto);
    saveData(products)
    res.redirect(`/detalle/${nuevoID}`); 
    }