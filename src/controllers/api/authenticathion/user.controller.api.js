const db = require("../../../database/models");

module.exports = {
    list: (req, res) => {
        db.User.findAll()
            .then((users) => {
                res.send(users);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then((user) => {
                res.send(user);
            })
            .catch((error) => {
                console.log(error);
            });
    },
}