const {check} =require("express-validator")
const {loadData} =require("../../data")
const {compareSync} = require('bcryptjs')




    
const loginDatesValidation = [
    check("email")
        .notEmpty().withMessage("Ingresa un email").bail()
        .isEmail().withMessage("Debe ingresar un email valido").bail()
        .custom((value, { req }) => {
            const users = loadData("users")
            const existUser = users.find((u) => u.email === value.trim())

            if (!existUser) {
                throw new Error("Email no registrado")
            }
            return true
        }),

    check("password")
        .notEmpty().withMessage("Ingresar contraseña").bail()
        .custom((value, { req }) => {
            const users = loadData("users")
            const userFind = users.find((u) => u.email === req.body.email)
            const passHash = userFind.password
            if (!compareSync(value, passHash)) {
                throw new Error("Contraseña incorrecta")
            }
            return true
        })
]
module.exports = loginDatesValidation
