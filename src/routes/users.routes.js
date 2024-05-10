const express = require('express')
const router = express.Router()
const loginValidation = require('../middlewares/validation/loginValidation');
const validProfile = require('../middlewares/validation/validProfile')
const { profile, sesion } = require('../controllers/users')
const { validationResult } = require('express-validator');


router.get('/:id',loginValidation ,validProfile, sesion)
router.post('/', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Si hay errores de validación, renderiza el formulario de inicio de sesión nuevamente con los errores
        return res.render('login', { errors: errors.array() });
    }
})


module.exports = router