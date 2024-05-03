const { loadData } = require("../../data");

module.exports = (req, res) => {
    const { id } = req.params;
    const products = loadData()

    const productFind = products.find(p => p.id === +id)
    
    res.render('admin/deleteProduct', {
        product: productFind
    })
}

/*const Product = require("../../models/Product");

module.exports = (req, res) => {
    const { id } = req.params;     //Esto extrae el id del producto de los parámetros de la ruta de la solicitud HTTP.

    Product.findByPk(id)          //Esto llama a la función findByPk en el modelo Product, que busca un producto en la base de datos por su clave primaria (id).
        .then(product => {
            if (!product) {    //Si no se encontró ningún producto con el id dado, se envía una respuesta HTTP con el código de estado 404 y un mensaje de error.
                return res.status(404).send('Producto no encontrado');
            }

            res.render('admin/deleteProduct', {   //Si se encontró un producto, se renderiza una vista llamada ‘admin/deleteProduct’, pasando el producto encontrado como una variable a la vista.
                product: product
            });
        })
        .catch(error => {     //Esto maneja cualquier error que pueda ocurrir durante la búsqueda del producto.
            console.error(error);
            res.status(500).send('Error al obtener el producto');
        });
};
*/