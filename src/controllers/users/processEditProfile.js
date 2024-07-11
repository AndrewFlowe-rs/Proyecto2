const db = require('../../database/models');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const userLogin = req.session.userLogin;
    if (!userLogin) {
        return res.redirect('aut/login');
    }

    const id = req.session.userLogin.id;
    const { name, email, number, state, password } = req.body;
    const avatar = req.file;

    try {
        const user = await db.User.findByPk(id);

        const updatedFields = {
            name: name ? name.trim() : user.name,
            email: email ? email.trim() : user.email,
            number: number ? number : user.number,
            state: state ? state.trim() : user.state,
            avatar: avatar ? avatar.filename : user.avatar,
        };

        await db.User.update(updatedFields, {
            where: { id: id }
        });

        const updatedUser = await db.User.findByPk(id);

        // console.log('Updated User:', updatedUser.toJSON());

        if (avatar && avatar.filename !== user.avatar) {
            const pathBefore = path.join(__dirname, `../../../public/design/users/${user.avatar}`);
            const existFile = fs.existsSync(pathBefore);
            if (existFile) {
                fs.unlinkSync(pathBefore);
            }
        }
         await updatedUser.save()
         console.log(updatedUser)
        res.redirect('/perfil');
        console.log('Perfil de usuario actualizado exitosamente');
    } catch (error) {
        console.error('Error al actualizar los datos del usuario:', error);
        res.status(500).send('Error interno del servidor al actualizar el perfil del usuario');
    }
};
