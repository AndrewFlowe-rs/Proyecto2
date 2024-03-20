const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const {  uploadProducts } = require('../middlewares/upload.files')
// Desde el app.js viene /Admin  

// Crear producto
router.get('/crear-producto', adminController.createProduct);
router.post('/crear-producto', uploadProducts.single('img'), adminController.update)


// Editar producto
router.get('/edit',adminController.editProdut);




//router.post('/create')
router.get('/' , adminController.list)


//Borrar producto
 router.get("/eliminar-producto/:id", adminController.delete);
 router.delete("/eliminar-producto/:id", adminController.remove);



module.exports = router;