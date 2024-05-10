const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentications');
// const {loginValidation} = require('../controllers/authentications')
const loginDatesValidation = require('../middlewares/validation/loginValidation');
const { loginProcess, login } = require('../controllers/authentications');
const validaciones = require('../middlewares/validation/registerValidation')
const { upload } = require("../middlewares/validations/upload.files");

// Desde app llega /aut


router.get('/login', login);
router.post('/login', loginDatesValidation, loginProcess );
router.get('/registro', authController.register);
router.post('/registro', upload.single('avatar'),validaciones, authController.processRegister);



module.exports = router;