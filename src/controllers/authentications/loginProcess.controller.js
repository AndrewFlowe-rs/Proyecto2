const { validationResult } = require('express-validator')
const { loadData } = require('../../data')

module.exports = (req, res) => {
    const users = loadData("users")

    const errors = validationResult(req)

    if (errors.isEmpty()) {

        const userFind = users.find((u)=> u.email === req.body.email)

        const { name, email, role, avatar} = userFind
        
        req.session.userLogin = {
            name,
            email,
            role,
            avatar
        }

        res.redirect("/")

    } else {
        const errorsMapped = errors.mapped()
        const { email } = req.body
        res.render("login", { errors: errorsMapped, email })
    }



}