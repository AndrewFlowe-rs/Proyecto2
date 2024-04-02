/*module.exports = (req, res, next) => {
    if (req.cookies.userLogin) {    //Esta línea comprueba si existe una cookie llamada userLogin en la solicitud del cliente usando req.cookies
      req.session.userLogin = req.cookies.userLogin; //Si la cookie userLogin existe, esta línea copia los datos almacenados en la cookie a la sesión del usuario en la aplicación Express.
    }
  
    next();
  };*/