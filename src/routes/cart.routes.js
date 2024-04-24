const express = require('express');
const router = express.Router();
const { cart, cartView } = require('../controllers/cart');


// desde app viene /carrito
router.get('/', cartView)



router.get('/:category', cart);


// Redirección desde '/cart' a '/'
// router.get('/cart',(req,res) => res.redirect('http://localhost:3030/carrito'))













module.exports = router;