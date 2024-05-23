const { validationResult, body} = require('express-validator');
const db = require('../../database/models'); // Importa el modelo de base de datos
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    
    try {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const { email, password } = req.body;

            const user = await db.User.findOne({ where: { email } });

            if (user) {
                if (bcrypt.compareSync(password, user.password)) {
                    req.session.userLogin = {
                        name: user.name,
                        email: user.email,
                        role: user.name_role,
                        avatar: user.avatar
                    };
                    return res.redirect("/");
                } else {
                    return res.render("authentication/login", {
                        errors: { password: { msg: "Contraseña incorrecta" } },
                        email
                    });
                }
            } else {
                return res.render("authentication/login", {
                    errors: { email: { msg: "Usuario no encontrado" } },
                    email
                });
            }
        } else {
            const errorsMapped = errors.mapped();
            const { email } = req.body;
            return res.render("authentication/login", { errors: errorsMapped, email });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error del servidor");
    }
};
