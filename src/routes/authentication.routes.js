const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentications');
// const {loginValidation} = require('../controllers/authentications')
const loginValidation = require('../middlewares/validation/loginValidation');
const { login } = require('../controllers/authentications');
const registerValidation = require('../middlewares/validation/registerValidation')

// Desde app llega /aut


router.get('/login', login);
router.post('/login', loginValidation, authController.loginProcess);
router.get('/registro', authController.register);
router.post('/registro', registerValidation, authController.processRegister);



module.exports = router;