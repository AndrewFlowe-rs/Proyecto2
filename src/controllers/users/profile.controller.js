const { loadData } = require('../../data')
module.exports = (req,res) => {
const { id }  = req.params
const users = loadData("users")
const userF = users.find(u => u.id === +id);
res.render("users/profile",{user: userF})
}

  