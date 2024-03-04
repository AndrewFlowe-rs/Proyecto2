const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// Desde el app.js viene /Admin  
router.get('/edit',adminController.editProdut);
router.get('/create',adminController.createProduct);
//router.post('/create')




module.exports = router;