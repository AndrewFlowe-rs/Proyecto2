const express = require('express')
const router = express.Router()
const loginValidation = require('../middlewares/validation/loginValidation');
const validProfile = require('../middlewares/validation/validProfile')
const {  sesion, edit, update } = require('../controllers/users')
const {loginProcess, logout} = require('../controllers/authentications')
const recordarme = require('../middlewares/validations/checkCookie')
const Session = require('../middlewares/validations/checkSession')
const { upload, uploadUser } = require("../middlewares/validations/upload.files");
const validacionesEditProfile = require('../middlewares/validation/editProfileValidations');


router.use(recordarme)
router.post('/login', loginValidation, loginProcess);
router.get('/',[validProfile, Session] , sesion)
router.post('/logout', logout)

router.get('/editar/:id', edit);
router.put('/editar/:id',[validacionesEditProfile,uploadUser.single('avatar')], update);




module.exports = router