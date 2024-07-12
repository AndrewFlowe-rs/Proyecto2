

module.exports = (req , res) =>{
    try {
      
        console.log(  req.session.passport);

    } catch (error) {
        res.redirect('/aut/login');
    }

};