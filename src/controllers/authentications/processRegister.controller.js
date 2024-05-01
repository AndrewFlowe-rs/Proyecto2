const { loadData, saveData } = require('../../data');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { email, password, name} = req.body;
    const users = loadData('users');

    const newUser = {
      id: !users.length ? 1 : users[users.length - 1].id + 1,
      name: name?.trim(),
      email: email?.trim().toLowerCase(),
      password: bcrypt.hashSync(password?.trim(), 12),
      role: "REGULAR",
      avatar: "",
    };

    users.push(newUser)

    saveData(users, 'users')

    res.redirect('/')
    return
  }

  res.render('authentication/register', {
    old: req.body,
    errors: errors.mapped(),
    locals: res.locals
  });
};