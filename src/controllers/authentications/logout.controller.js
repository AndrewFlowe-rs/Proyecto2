module.exports = (req, res) => {

  
  if (req.session.userLogin) {
      req.session.destroy();
      res.redirect("/aut/login");
  }
  console.log('Sesión destruida, redirigiendo...')
}