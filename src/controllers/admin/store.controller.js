const { readData, saveData } = require('../../database')


module.exports = (req,res) => {
    const {nombre, precio, descripcion, categoria} = req.body
    const imagen = req.file
    const products = readData();
 
    const nuevoID = products[products.length - 1].id + 1

    const nuevoProducto = {
        id: nuevoID,
        nombre: nombre.trim(),
        precio: +precio,  
        descripcion: descripcion.trim(),
        categoria: categoria.trim(),
        imagen: imagen ? imagen.filename : "default-image.png"
        
    };
    products.push(nuevoProducto);
    saveData(products)
    res.redirect(`/detalle/${newID}`); 
    }