const { readData, saveData } = require("../../data");
const fs = require('fs')
const path = require('path')


module.exports = (req,res) => {
    const {id} = req.params;
    const {nombre, precio, descripcion, categoria} = req.body;
    const imagen = req.file
    const products = readData();
    const productMp = products.map(p => {
        if(p.id === +id){
            const productsUp = {
                ...p,
                nombre: nombre.trim(), 
                precio: +precio, 
                descripcion: descripcion.trim(), 
                categoria: categoria.trim(),
                imagen: imagen ? imagen.filename : p.imagen
            }
         
          
            if(imagen?.filename){
  const pathBefore = path.join(__dirname, '../../../public/design/product' + p.imagen)
  const existF = fs.existsSync(pathBefore)
           if(existF){
           fs.unlinkSync(pathBefore)
            }
            }
  

            return productsUp

        }
        return p

    })
    saveData(productMp)
    res.redirect(`/productos/detalle/${id}`)
    }