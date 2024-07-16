const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentications');
// const {loginValidation} = require('../controllers/authentications')
const loginDatesValidation = require('../middlewares/validation/loginValidation');
const { loginProcess, login, } = require('../controllers/authentications');
const validaciones = require('../middlewares/validation/registerValidation')
const { upload, uploadUser } = require("../middlewares/validations/upload.files");
const { forgotPassword, resetPassword} = require('../controllers/authentications/recuperarpassword.controller');
const { configServiceLogInGoogle } = require('../controllers/authentications/configServiceLogInGoogle.controller');

// Desde app llega /aut

const passport = require('passport');
const configServiceLogInGoogleController = require('../controllers/authentications/configServiceLogInGoogle.controller');


router.get('/login', login);
router.post('/login', loginDatesValidation, loginProcess );
router.get('/registro', authController.register);
router.post('/registro',[ uploadUser.single('avatar') ,validaciones], authController.processRegister);
router.get('/recuperar-contrasenia', authController.recuperar )
router.get('/logout', authController.logout )
// router.post('/recuperar-contrasenia', forgotPassword);
// router.post('/recuperar-contrasenia/:token', resetPassword);


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
//LOGIN GOOGLE
router.get('/login/google', passport.authenticate('google'));


 router.get(
    "/google/callback",
     passport.authenticate("google", { failureRedirect: "/aut/login" }),
     configServiceLogInGoogleController
   );

module.exports = router;