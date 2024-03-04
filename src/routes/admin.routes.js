const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// Desde el app.js viene /Admin  
router.get('/edit',adminController.editProdut);
router.get('/create',adminController.createProduct);

// Redirección desde '/home' a '/'
router.get('/',(req,res) => res.redirect('/'))




module.exports = router;