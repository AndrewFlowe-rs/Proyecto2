const { loadData, saveData } = require('../../data');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = (req, res) => {
  const errors = validationResult(req);
  const old = req.body;

 

  if (errors.isEmpty()) {
    const imageAvatar = req.file
    const users = loadData('users');
    const { name, email, password} = req.body;
    const newUser = {
      id: !users.length ? 1 : users[users.length - 1].id + 1,
      name: name?.trim(),
      email: email?.trim().toLowerCase(),
      password: bcrypt.hashSync(password?.trim(), 12),
      role: "REGULAR",
      avatar: imageAvatar ? imageAvatar.filename : "defaultImg.webp",
      number: ""
    };

    users.push(newUser)

    saveData(users, 'users')

    res.redirect('/')
    return
  };

  res.render('authentication/register', {
    old: old, 
    errors: errors.mapped(),
  });
};
