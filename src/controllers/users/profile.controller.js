const db = require('../../database/models');

module.exports = async (req, res) => {
  try {
    
  
    const userLogin = req.session.userLogin

    const user = await db.User.findOne({
      where:{id: userLogin.id}
    });

    if (!user) {
      return res.status(404).render('other/error');
    }

    res.render('users/profile', { user: userLogin });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};
