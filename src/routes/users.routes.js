const express = require('express')
const router = express.Router()
const loginValidation = require('../middlewares/validation/loginValidation');
const validProfile = require('../middlewares/validation/validProfile')
const { profile, sesion } = require('../controllers/users')
const { validationResult } = require('express-validator');
const {loginProcess} = require('../controllers/authentications')


router.get('/',validProfile , sesion)
router.post('/', loginValidation, loginProcess);


module.exports = router