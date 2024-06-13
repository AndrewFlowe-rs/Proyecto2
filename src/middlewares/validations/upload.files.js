const path = require('path');
const multer = require('multer');

const formatosAceptados = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const fileFilter = (req, file, cb) => {
  if (formatosAceptados.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Las extensiones permitidas son .jpg, .png, .webp y .jpeg'), false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/design/imgProducts');
  },
  filename: function (req, file, cb) {
    const filenameFormat = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, filenameFormat);
  }
});

const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/design/users');
  },
  filename: function (req, file, cb) {
    const filenameFormat = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, filenameFormat);
  }
});

const upload = multer({ storage: storage, fileFilter: fileFilter });
const uploadUser = multer({ storage: storageUser, fileFilter: fileFilter });

module.exports = {
  upload,
  uploadUser
};
