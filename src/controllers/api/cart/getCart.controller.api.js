const { Op } = require('sequelize')
const db = require('../../../database/models')


module.exports = (req,res) => {

    if (req.session.userLogin){
        db.Order.findOrCreate({
            where:{
                [Op.and]:[
                    {
                    userId: req.session.userLogin.id
                    },
                    {
                    state: 'pending'
                    }
                ]
            }
        })
    }


    res.status(200).json({ ok:true, msg: 'ok'})
}