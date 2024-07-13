
const db = require("../../database/models");
module.exports = async (req , res) =>{
    try {
      
   const {user: {_json , provider} } = req.session.passport;
   const {sub,given_name ,family_name,picture,email} = _json

  const [user , isCreate] =await db.User.findOrCreate({
    where:{
        social_id: sub
      },
      defaults: {
        social_id: sub,
        provider,
        name: given_name,
        last_name: family_name,
        email,
        avatar: picture,   
      },



   })
   req.session.userLogin = {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    role: "Regular" // user.role.name,
  }
  res.cookie("userLogin", req.session.userLogin, { maxAge: 6000 * 30 });

  res.redirect("/");
    

    } catch (error) {
        res.json(error);
    }

};