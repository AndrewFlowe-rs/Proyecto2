const db = require('../../database/models');

module.exports = async (req, res) => {
  try {
    const { id } = req.session.userLogin;
  
  

    const user = await db.User.findByPk(id);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    res.render('users/profile', {  user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};
