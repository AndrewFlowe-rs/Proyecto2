const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// Desde el app.js viene /Admin  
router.get('/edit/:id',adminController.editProdut);
router.get('/create/:id',adminController.createProduct);

// Redirección desde '/home' a '/'
router.get('/',(req,res) => res.redirect('/'))




module.exports = router;