// const { loadData, saveData } = require('../../data');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../database/models')

module.exports = (req, res) => {
  const errors = validationResult(req);
  const old = req.body;

  if (errors.isEmpty()) {
    const imageAvatar = req.file
    const { name, email, password, number,role, name_role} = req.body;
    db.User.create({
      name: name?.trim(),
      email: email?.trim().toLowerCase(),
      password: bcrypt.hashSync(password?.trim(), 12),
      avatar: imageAvatar ? imageAvatar.filename : "defaultImg.webp",
      roleId: +role,
      name_role: name_role ? name_role.trim() : 'Regular', 
      number: number ? number : ''
    })
    .then(() => res.redirect('/'))
    .catch(error => {
      console.error(error);
      res.status(500).send("Error al crear el usuario");
    });
    return
  }

  res.render('authentication/register', {
    old: old, 
    errors: errors.mapped(),
  });
};
