const express = require('express');
const { cart, add } = require('../controllers/cart');
const router = express.Router();

// Ruta para renderizar la vista del carrito
router.get('/agregar/:id', cart);

// Ruta para agregar un producto al carrito
router.post('/agregar/:id', add);

module.exports = router;
