const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentications');
// const {loginValidation} = require('../controllers/authentications')
const loginValidation = require('../middlewares/validation/loginValidation')
const {login} =require('../controllers/authentications')


// Desde app llega /au


router.get('/login', login);
router.post('/login', loginValidation, authController.loginProcess);
router.get('/registro', authController.register);
router.post('/registro', authController.processRegister);








// // Redirección desde '/login' a '/'
// router.get('/login',(req,res) => res.redirect('http://localhost:3030/aut/inicio'));

// // Redirección desde '/register' a '/'
// router.get('/register',(req,res) => res.redirect('http://localhost:3030/aut/registro'))









module.exports = router;