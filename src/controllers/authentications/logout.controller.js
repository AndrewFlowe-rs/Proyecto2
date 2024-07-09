module.exports = (req, res) => {
    req.session.destroy();
    console.log("Sesión destruida. Redirigiendo...");


    res.redirect("/aut/login")
  };
  
