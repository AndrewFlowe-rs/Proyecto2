const { readData, saveData } = require("../../data");
const fs = require('fs')
const path = require('path')


module.exports = (req,res) => {
    const {id} = req.params;
    const {name, price, description, category} = req.body;
    const image = req.file
    const products = readData();
    const productMp = products.map(p => {
        if(p.id === +id){
            const productsUp = {
                ...p,
                name: name.trim(), 
                price: +price, 
                description: description.trim(), 
                category: category.trim(),
                image: image ? image.filename : p.image
            }
         
          
            if(image?.filename){
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