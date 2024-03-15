const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");
// Desde el app.js viene /Admin  
router.get('/create',adminController.create);
router.get('/edit',adminController.edit);

//delete

router.get("/eliminar-producto", adminController.delete);
router.delete("/eliminar-producto/:id", adminController.remove);





//router.post('/create')
router.get('/' ,adminController.list)




module.exports = router;