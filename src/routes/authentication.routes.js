const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentications');

// Desde app llega /aut


router.get( '/login', authController.login);
router.get('/registro', authController.register);







// // Redirección desde '/login' a '/'
// router.get('/login',(req,res) => res.redirect('http://localhost:3030/aut/inicio'));

// // Redirección desde '/register' a '/'
// router.get('/register',(req,res) => res.redirect('http://localhost:3030/aut/registro'))









module.exports = router;