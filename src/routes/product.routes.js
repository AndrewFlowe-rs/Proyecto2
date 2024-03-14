const express = require('express');
const router = express.Router();
const prodController = require('../controllers/product')

router.get('/detalle', prodController.detail);

// Redirección desde '/product' a '/'
router.get('/product',(req,res) => res.redirect('http://localhost:3031/producto'))


// Redirección desde '/detail' a '/'
router.get('/detail',(req,res) => res.redirect('http://localhost:3031/detalle'))





module.exports = router;