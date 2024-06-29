const db = require('../../database/models');
const fs = require('fs');
const path = require('path');

module.exports = async (req,res) => {
    const userLogin = res.locals.userLogin;
    if(!userLogin){
        return res.redirect('aut/login')
    }
    const {id} = req.params;
    const {name, email, number, state, password} = req.body;
    const avatar = req.file;

    try{
        const user = await db.User.findByPk(id);
        const avatarFirst = avatar;
        await db.User.update(
            {
                name: name ? name.trim() : name,
                email: email ? email.trim() : email,
                number: number ? number : number,
                state: state ? state.trim() : state,
                password: password ? password : password
            },
            {
                where: {id},
            }
        );
        if (avatar && avatarFirst) {
            const pathBefore = path.join(__dirname, `../../../public/design/users/${avatarFirst}`);
            const existFile = fs.existsSync(pathBefore);
            if (existFile) {
                fs.unlinkSync(pathBefore);
            }
        }

        res.redirect('/perfil');   
    }  catch (error) {
        console.error('Error al actualizar los datos del usuario:', error);
        res.status(500).send('Error interno del servidor al actualizar el perfil del usuario');
    }
}