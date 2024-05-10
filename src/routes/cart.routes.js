const express = require('express');
const {cart, add, pro} = require('../controllers/cart');
const router = express.Router();
// const { cart, cartView } = require('../controllers/cart');


// desde app viene /carrito
router.get('/agregar/:id', add)
router.get('/', cart)


















module.exports = router;