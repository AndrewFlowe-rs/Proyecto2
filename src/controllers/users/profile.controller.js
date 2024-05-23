const db = require('../../database/models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const userLogin = req.session.user;
  

    const user = await db.User.findByPk(id);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    res.render('users/profile', { userLogin, user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};
