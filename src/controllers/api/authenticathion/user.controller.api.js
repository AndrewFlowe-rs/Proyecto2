
const db = require("../../../database/models");

module.exports = {
    list: (req, res) => {               
        db.User.findAll() //busca todos los usuarios en la base de datos
            .then((users) => {
                let userList = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: "api/users",
                    },
                    data: users.map(user => {         // Aquí estoy utilizando el método map de JavaScript para crear un nuevo array a partir del array users
                        return {
                            ...user.dataValues,         // En la función que le pasé al método map, estoy devolviendo un nuevo objeto para cada usuario. Este objeto contiene todas las propiedades del usuario original (que se acceden a través de user.dataValues) y una propiedad adicional detail que contiene la URL de detalle del usuario. 
                            detail: `api/users/${user.id}`
                        }
                    }),
                    
                }
                res.json(userList);  // Envía userList como respuesta
            })
            .catch((error) => {
                res.status(500).json({ error: error.toString() });
            });
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id, {
            attributes: ['id', 'name', 'email', 'profileImageUrl'] // Datos que se van a mostrar. 
        })
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            res.status(500).json({ error: error.toString() });
        });
    },
    
} 