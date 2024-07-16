module.exports = (req, res, next) => {
    if (req.cookies.userLogin) {  
      const userLoginData = req.cookies.userLogin; 
      req.session.userLogin = userLoginData;   
      // const maxAgeInMilliseconds = 7 * 24 * 60 * 60 * 1000;
      // res.cookie('userLogin', userLoginData, {
      //   maxAge: maxAgeInMilliseconds,
      //   httpOnly: true, 
      // });
    }
    next();
  };