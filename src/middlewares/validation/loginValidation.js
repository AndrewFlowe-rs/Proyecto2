const { check } = require("express-validator");
const { compareSync } = require('bcryptjs');
const db = require("../../database/models"); 

const loginDatesValidation = [
    check("email")
        .notEmpty().withMessage("Ingresa un email").bail()
        .isEmail().withMessage("Debe ingresar un email valido").bail()
        .custom(async (value, { req }) => {
            const user = await db.User.findOne({ where: { email: value.trim() } });
            if (!user) {
                throw new Error("Email no registrado");
            }
            req.user = user;
            return true;
        }),

    check("password")
        .notEmpty().withMessage("Ingresar contraseña").bail()
        .custom((value, { req }) => {
         
            const user = req.user;
            if (!compareSync(value, user.password)) {
                throw new Error("Contraseña incorrecta");
            }
            return true;
        })
];

module.exports = loginDatesValidation;
