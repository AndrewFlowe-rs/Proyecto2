const path = require('path')
module.exports = (req,res) => {
    const {avatar} = req.params
    try {
        res.sendFile(path.join(__dirname,`../../../../public/design/users/${avatar}`))
    } catch (error) {
        console.log(error)
    }
}

