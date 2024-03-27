const express = require('express');
const router = express.Router();
const prodController = require('../controllers/product')

router.get('/', prodController.product);
router.get('/detalle/:id', prodController.detail);


module.exports = router;