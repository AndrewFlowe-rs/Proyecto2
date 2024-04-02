module.exports = (req, res, next) => {
   
    if(req.session.userLogin){   //Se verifica si existe una propiedad llamada userLogin dentro de la sesión del usuario (req.session).
        res.locals.userLogin = req.session.userLogin    //Si la sesión del usuario existe, esta línea copia la información del usuario almacenada en req.session.userLogin a una variable local llamada res.locals.userLogin.
    }
    next()
};