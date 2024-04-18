const express = require('express')
const router = express.Router()
const { profile, sesion } = require('../controllers/users')
const { validationResult } = require('express-validator');
const { isValidProfile } = require('../middlewares/validation')


router.get('/', sesion)
router.post('/', isValidProfile, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Si hay errores de validación, renderiza el formulario de inicio de sesión nuevamente con los errores
        return res.render('login', { errors: errors.array() });
    }
})


module.exports = router