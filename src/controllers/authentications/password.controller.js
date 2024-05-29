const nodemailer = require('nodemailer');
const crypto = require('crypto');

module.exports = (req,res) => {
    exports.sendPasswordResetEmail = (req, res) => {
        const email = req.body.email;
    
        
        const user = getUserByEmail(email);
        if (!user) {
            return res.status(404).send('El correo electrónico no está asociado a ninguna cuenta');
        }
    
        const token = crypto.randomBytes(20).toString('hex');
        storeTokenInDatabase(user.id, token);
    
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tu_correo@gmail.com',
                pass: 'tu_contraseña'
            }
        });
    
        const mailOptions = {
            from: 'tu_correo@gmail.com',
            to: user.email,
            subject: 'Recuperación de contraseña',
            text: `Para restablecer tu contraseña, haz clic en este enlace: http://tuapp.com/reset-password/${token}`
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send('Error al enviar el correo electrónico');
            } else {
                console.log('Correo electrónico enviado: ' + info.response);
                return res.status(200).send('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña');
            }
        });
    };
}
