const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentications');
// const {loginValidation} = require('../controllers/authentications')
const loginDatesValidation = require('../middlewares/validation/loginValidation');
const { loginProcess, login, province} = require('../controllers/authentications');
const validaciones = require('../middlewares/validation/registerValidation')
const { upload, uploadUser } = require("../middlewares/validations/upload.files");

// Desde app llega /aut


router.get('/login', login);
router.post('/login', loginDatesValidation, loginProcess );
router.get('/registro', province);
router.post('/registro', uploadUser.single('avatar'),validaciones, authController.processRegister);
router.get('/recuperar-contraseña', )



module.exports = router;