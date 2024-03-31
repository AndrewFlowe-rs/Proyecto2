const bcrypt = require('bcryptjs');
const { readData, saveData } = require('../../data');

module.exports = (req, res) => {
  const { name,surname, email, password, number, city } = req.body; // Extrae los valores name, surname, email, y password
  const users = readData("users"); // Obtiene los datos de los usuarios existentes
  const newUser = { //: Crea un objeto para representar al nuevo usuario
    id: !users.length ? 1 : users[users.length - 1].id + 1, /*/*Si no hay usuarios (!users.length), se asigna el id 1.
    Si hay usuarios, se asigna el id del último usuario*/
    name: name?.trim(),
    surname: surname?.trim(),
    email: email?.trim(),
    password: bcrypt.hashSync(password?.trim(), 10), // La contraseña del usuario hasheada usando bcrypt.hashSync(password?.trim(), 10).
   number: number.trim(),
    role: "REGULAR",
    city:""
  };

  users.push(newUser);  //: Agrega el objeto newUser que representa al nuevo usuario al final del arreglo users.

  saveData(users, "users"); //guarda los datos actualizados del arreglo 

  res.redirect("/"); // Redirige al cliente a la página raíz despus de registrarse correctamente
};


/*NOTAS :.trim() elimina espacios iniciales y finales.
bcrypt.hashSync genera un hash seguro de la contraseña con un costo de 10 (puede ajustarse).*/