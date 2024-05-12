const db = require('../../../database/models')

module.exports = {
  listproducts: (req ,res ) => {
      db.Product.findAll()
      .then((products)=> {
        let countByCategory = {}; // Este objeto contendrá el conteo por categoría
        products.forEach(product => {
          product.categories.forEach(category => {
            if (!countByCategory[category]) {
              countByCategory[category] = 0;
            }
            countByCategory[category]++;
          });
        });
        let productList = {
            meta: {
              status: 200,
              count: products.length,
              countByCategory: countByCategory, // Agrega el conteo por categoría 
            },
            data: products.map(product => {
              return {
                ...product.dataValues,
                detail: `api/products/${product.id}`
              }
            }),
          }
          res.json(productList);  // Envía productList como respuesta
        })
        .catch((error) => {
          res.status(500).json({ error: error.toString() });
        });
    },

    detailproduct: (req, res) => {
        db.Product.findByPk(req.params.id, {
            attributes: ['id', 'name', 'description', 'categories', 'productImageUrl'] // Asegúrate de que estos son los campos correctos en tu base de datos
        })
        .then((product) => {
            product.dataValues.detail = `api/products/${product.id}`; // Agrega la URL del detalle
            res.json(product);
        })
        .catch((error) => {
            res.status(500).json({ error: error.toString() });
        });
    },
  }


  