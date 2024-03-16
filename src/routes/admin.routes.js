const express = require('express');
const router = express.Router();
const { editProduct, createProduct, list, update } = require('../controllers/admin');
const { uploadProducts } = require('../middlewares/upload.files')



// Desde el app.js viene /Admin  
router.get('/edit', editProduct);

router.get('/lista-productos', list)




//router.post('/create')
router.get('/' , list)
// Crear producto
router.get('/crear-producto', createProduct);
router.post('/crear-producto', uploadProducts.single('img'), update)


module.exports = router;