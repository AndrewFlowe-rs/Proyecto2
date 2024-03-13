       //Importando módulos:
const { loadData, saveData } = require("../../data");
const path = require ('path');
const fs = require ('fs');
               //función:
module.exports = (req,res) => {
    const {id} = req.params   // Extrayendo el ID del producto
    const products = loadData()   //Cargando productos
    const productsLessOne = products.filter(p => p.id !== +id)   //Filtrando productos:
    const productDestroy = products.find(p => p.id === +id)    // Encontrando producto eliminado:
    const pathFile = path.join(__dirname,"../../../public/desing/products/" + productDestroy.image)  // Construyendo la ruta del archivo:
    const existFile = fs.existsSync(pathFile)    // Comprobando la existencia del archivo:
    if(existFile) {
    fs.unlinkSync(pathFile)   // Eliminando archivo (si existe):
  }
  saveData(productsLessOne)   // Guardando productos actualizados:

  res.redirect("/productos")  //Redireccionando:
}


