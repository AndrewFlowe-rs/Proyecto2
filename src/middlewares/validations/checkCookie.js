module.exports = (req, res, next) => {
    if (req.cookies.userLogin) {  
      const userLoginData = req.cookies.userLogin; 
      req.session.userLogin = userLoginData;   
    
    }
    next();
  };