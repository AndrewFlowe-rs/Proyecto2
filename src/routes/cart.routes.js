const express = require('express');
const { cart } = require('../controllers/cart');
const router = express.Router();

router.get('/carrito', cart)












module.exports = router;