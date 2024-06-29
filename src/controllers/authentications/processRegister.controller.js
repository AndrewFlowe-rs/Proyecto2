const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../database/models');
const { fetchProvinces } = require('../../utils/provinces');

module.exports = async (req, res) => {
  const errors = validationResult(req);
  const old = req.body;

  if (!errors.isEmpty()) {
    return res.render('authentication/register', {
      old,
      errors: errors.mapped(),
    });
  }

  try {
    const { name, email, password, number, role, name_role, state } = req.body;
    const avatar = req.file ? req.file.filename : 'defaultImg.webp'; 

    await db.User.create({
      name: name?.trim(),
      email: email?.trim().toLowerCase(),
      password: bcrypt.hashSync(password?.trim(), 12),
      avatar: avatar,
      roleId: +role,
      name_role: name_role ? name_role.trim() : 'Regular',
      number: number ? number : '',
      state: state?.trim(),
    });
    console.log('Usuario creado exitosamente');
    return res.redirect(`/perfil`);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).send("Error al crear el usuario");
  }
};
