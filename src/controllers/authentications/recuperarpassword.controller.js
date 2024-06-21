const crypto = require('crypto');
const nodemailer = require('nodemailer');
const db = require('../../database/models');

module.exports = {
  forgotPassword: async (req, res) => {
    const { email } = req.body;

    try {
      const user = await db.User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const token = crypto.randomBytes(20).toString('hex');

      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now

      await user.save();

      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'your-email@gmail.com',
          pass: 'your-email-password',
        },
      });

      const mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Password Reset',
        text: `
          You are receiving this because you (or someone else) have requested the reset of the password for your account.
          Please click on the following link, or paste this into your browser to complete the process:
          http://${req.headers.host}/reset-password/${token}
          If you did not request this, please ignore this email and your password will remain unchanged.
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'An e-mail has been sent to ' + user.email + ' with further instructions.' });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  },

  resetPassword: async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
      const user = await db.User.findOne({
        where: {
          resetPasswordToken: token,
          resetPasswordExpires: { [Op.gt]: Date.now() },
        },
      });

      if (!user) {
        return res.status(400).json({ message: 'Password reset token is invalid or has expired.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      user.resetPasswordToken = null;
      user.resetPasswordExpires = null;

      await user.save();

      res.status(200).json({ message: 'Password has been updated.' });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  },
};
