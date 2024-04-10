const { body, validationResult} = require('express-validator')
const { loadData } = require('./database');


// Middleware de validación de perfil
const existEmail = (value) => {
   const users = loadData('users')
   return users.filter(u => u.email === value)
}
const isValidProfile = [
body('name').notEmpty().isAlpha().withMessage('Campo obligatorio'),
body('surname').notEmpty().isAlpha().withMessage('Campo obligatorio'),


body('email').notEmpty().isEmail().withMessage('Campo obligatorio').custom( value => {
const existUser = existEmail(value)
if (existUser.length > 0) {
    throw new Error('Correo electrónico ya en uso');
}
return true;
}),

body('password').notEmpty().withMessage('Campo obligatorio').isLength({min:5, max:20}),

]

module.exports = isValidProfile