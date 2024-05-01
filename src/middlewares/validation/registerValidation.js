const { check } = require('express-validator');
const path = require('path');


module.exports = (req,res) => { 
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
        .isLength({ min: 11, max: 16 }).withMessage('El nombre debe tener entre 3 y 16 caracteres')
        .notEmpty().withMessage('El telefono es requerido').bail(),

    check('city')
        .isLength({ min: 8, max: 16 }).withMessage('El nombre debe tener entre 3 y 16 caracteres')
        .notEmpty().withMessage('La Ciudad es requerido').bail(),

    check('avatar')
        .custom((value, { req }) => {
            const reqFile = req.file;

            const extensionesAceptadas = ['.jpg', '.jpeg', '.png'];
            if (!reqFile) {
                throw new Error('La imagen de perfil es requerida');
            } else {
                let extension = path.extname(reqFile.originalname);
                if (!extensionesAceptadas.includes(extension)) {
                    throw new Error('Las extensiones permitidas son .jpg, .png y .jpeg');
                }
            }
            return true;
        })
];


}

