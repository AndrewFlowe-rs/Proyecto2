/*const { readData } = require("../../data");
const bcrypt = require("bcryptjs");// Importa la librería bcryptjs para el manejo seguro de contraseñas.*/

const { readData } = require("../../data");

module.exports = (req, res) => {
    const { email, password} = req.body;
    const users = readData("users");// Obtiene los datos de los usuarios,
  

    const userFind = users.find((u) => u.email === email);// Busca un usuario


    if (!userFind) res.send("El usuario no existe");//Si no se encuentra ningún usuario con ese correo, envía un mensaje de error al cliente.

    const isPasswordValid = bcrypt.compareSync(password, userFind.password);//Compara la contraseña ingresada por el usuario con la contraseña almacenada
  
    if (!isPasswordValid) res.send("El password es incorrecto");//Si la contraseña no es válida, envía un mensaje de error al cliente.
  
    req.session.userLogin = {//Crea una sesión para el usuario en la aplicación Express y almacena la información del usuario en la sesión.
      name: userFind.name,
      surname: userFind.surname,
      avatar: userFind.avatar,
      role: userFind.role,
    };
    res.redirect("/")
}