const { loadData, saveData } = require("../../database");


module.exports = (req, res) => {
    const { name, price, discount, description, category } = req.body;  //Extrae informacion del nuevo producto 
    const image = req.file;  //Extrae informacion de la imagen cargada en la solicitud 
  
    const products = loadData();  //Llama a la funcion para recuprtst los datos de los productos existentes 
  
    const newID = products[products.length - 1].id + 1;   //Calcula un  nuevo id para el producto que se esta agregando
    const newProduct = {   //Define un nuevo objeto con propiedades que tendra el nuevo producto
        id: newID,
        name: name.trim(),
        price: +price,
        discount: +discount,
        description: description.trim(),
        category: category?.trim(),
        image: image ? image.filename : "default-image.png",   //Si no se cargo una imagen , se establece la imagen default
        createdAt: req.createdAt,
      };

      products.push(newProduct); // Agrega el nuevo producto al final del array de productos
      saveData(products); // Guarda la nueva lista de productos actualizada 
    
    res.redirect(`/productos/detalle/${newID}`);  // Redirecciona a los detalles del nuevo producto
    };