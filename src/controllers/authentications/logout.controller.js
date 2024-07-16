module.exports = (req, res) => {

  try {
    if (req.session.userLogin) {
  
  
        req.session.destroy();
        res.cookie(
          "userLogin",
          "",
          { maxAge: 1 }
        )
        res.redirect("/aut/login");
      }
      console.log('Sesión detruida, redirigiendo...')
    
  } catch (error) {
    console.log(error)
  }
}