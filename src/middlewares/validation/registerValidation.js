const { check } = require('express-validator');
const path = require('path');


    const validaciones = [
    check('name')
        .isLength({ min: 3, max: 16 }).withMessage('El nombre debe tener entre 3 y 16 caracteres')
        .notEmpty().withMessage('El nombre es requerido').bail(),


    check('email')
        .isEmail().withMessage('El email no es válido')
        .normalizeEmail().bail(),

    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0 }).withMessage('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número').bail(),

    check('number')
        .isLength({ min: 10, max: 16 }).withMessage('El número no debe tener menos de 10 dígitos')
        .notEmpty().withMessage('El telefono es requerido').bail(),

    check('state')
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres').notEmpty().withMessage('Este campo es requerido').bail(),

    check('avatar')
    .custom((value, { req }) => {
        if (!req.file) {
          throw new Error('Debes subir una imagen');
        }
        const extensionesAceptadas = ['.jpg', '.jpeg', '.png', '.webp'];
        const extension = path.extname(req.file.originalname).toLowerCase();
        if (!extensionesAceptadas.includes(extension)) {
          throw new Error('Las extensiones permitidas son .jpg, .png, .webp y .jpeg');
        }
        return true;
      })
        
];

module.exports = validaciones

