const express = require('express');
const { cart, add } = require('../controllers/cart');
const router = express.Router();

// Ruta para renderizar la vista del carrito
router.get('/', cart);

// Ruta para agregar un producto al carrito

module.exports = router;
