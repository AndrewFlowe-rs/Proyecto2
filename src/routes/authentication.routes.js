const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentications');
// const {loginValidation} = require('../controllers/authentications')
const loginDatesValidation = require('../middlewares/validation/loginValidation');
const { loginProcess, login, } = require('../controllers/authentications');
const validaciones = require('../middlewares/validation/registerValidation')
const { upload, uploadUser } = require("../middlewares/validations/upload.files");
const { forgotPassword, resetPassword} = require('../controllers/authentications/recuperarpassword.controller');

// Desde app llega /aut

const passport = require('passport');


router.get('/login', login);
router.post('/login', loginDatesValidation, loginProcess );
router.get('/registro', authController.register);
router.post('/registro',[ uploadUser.single('avatar') ,validaciones], authController.processRegister);
router.get('/recuperar-contrasenia', authController.recuperar )
// router.post('/recuperar-contrasenia', forgotPassword);
// router.post('/recuperar-contrasenia/:token', resetPassword);
router.get('/logout', authController.logout)


//LOGIN GOOGLE
router.get('/iniciar/google', passport.authenticate('google'));


module.exports = router;