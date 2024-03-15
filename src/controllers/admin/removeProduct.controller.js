       //Importando módulos:
const { loadData, saveData } = require("../../database");
const path = require ('path');
const fs = require ('fs');
               //función:
module.exports = (req,res) => {
    const {id} = req.params   // Extrayendo el ID del producto ; Extrae el parámetro id de la propiedad params del objeto de solicitud
    const products = loadData()   //Cargando productos : Llama a la función loadData importada para recuperar los datos del producto
    const productsLessOne = products.filter(p => p.id !== +id)   //Filtrando productos:
    const productDestroy = products.find(p => p.id === +id)    // Encontrando producto eliminado:
    const pathFile = path.join(__dirname,"../../../public/desing/products/" + productDestroy.image)  // Construyendo la ruta del archivo:
    const existFile = fs.existsSync(pathFile)    // Comprobando la existencia del archivo:
    if(existFile) {
    fs.unlinkSync(pathFile)   // Eliminar el archivo de imagen si existe.
  }
  saveData(productsLessOne)   // Actualizar los datos del producto

  res.redirect("/admin/productos")  //Redireccionar al usuario a la página de lista de productos
};


