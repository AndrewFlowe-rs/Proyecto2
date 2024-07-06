const db = require('../../database/models')
module.exports = (req,res) => {
    if (!req.session.userLogin) {
        return res.redirect('aut/login');
    }
    const userId = req.params.id;
db.User.findByPk(userId)
.then(user =>{
    if(!user){
        return res.status(404).send('Usuario no encontrado');

    }
     res.render('users/editProfile',{user});
})
.catch(error => {
    console.error('Error al obtener el usuario:', error);
    res.status(500).send('Error interno del servidor');
})

   
}