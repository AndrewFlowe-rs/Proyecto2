const path = require('path');
const multer = require('multer');
const formato = ["image/jpeg", "image/jpg" ,"image/png", "image/webp"]



  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/design/imgProducts')
    },
    filename: function (req, file, cb) {
      const filenameFormat = file.fieldname + '-' + Date.now() + '-' + path.extname(file.originalname)
      cb(null, filenameFormat)
    }
  })
  

  const storageUser = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/design/users')
    },
    filename: function (req, file, cb) {
      const filenameFormat = file.fieldname + '-' + Date.now() + '-' + path.extname(file.originalname)
      cb(null, filenameFormat)
    }
  })
  
  const upload = multer({ storage: storage });
  const uploadUser = multer({ storage: storageUser });
  module.exports = {
    upload,
    uploadUser
}
    
  