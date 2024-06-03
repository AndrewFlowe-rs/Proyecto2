const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../database/models');

// Función para obtener las provincias
const fetchProvinces = async () => {
  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre');
    const data = await response.json();
    return data.provincias;
  } catch (error) {
    console.error('Error fetching provinces:', error);
    throw new Error('Error fetching provinces');
  }
};

// Controlador de registro
module.exports = async (req, res) => {
  const errors = validationResult(req);
  const old = req.body;

  if (errors.isEmpty()) {
    const imageAvatar = req.file;
    const { name, email, password, number, role, name_role, state } = req.body;
    try {
      await db.User.create({
        name: name?.trim(),
        email: email?.trim().toLowerCase(),
        password: bcrypt.hashSync(password?.trim(), 12),
        avatar: imageAvatar ? imageAvatar.filename : "avatarDefault.webp",
        roleId: +role,
        name_role: name_role ? name_role.trim() : 'Regular', 
        number: number ? number : '',
        state: state?.trim(),
      });
      return res.redirect('/perfil');
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).send("Error al crear el usuario");
    }
  }

  try {
    const provinces = await fetchProvinces();
    res.render('authentication/register', {
      old: old,
      errors: errors.mapped(),
      provinces: provinces
    });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};
