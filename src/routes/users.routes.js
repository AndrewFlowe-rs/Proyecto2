const express = require('express')
const router = express.Router()
const loginValidation = require('../middlewares/validation/loginValidation');
const validProfile = require('../middlewares/validation/validProfile')
const {  sesion } = require('../controllers/users')
const {loginProcess, logout} = require('../controllers/authentications')
const recordarme = require('../middlewares/validations/checkCookie')
const Session = require('../middlewares/validations/checkSession')


router.use(recordarme)
router.post('/', loginValidation, loginProcess);
router.get('/',[validProfile, Session] , sesion)
router.get('/cerrar',[validProfile, Session] ,logout)




module.exports = router