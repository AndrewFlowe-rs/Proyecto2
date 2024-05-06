const express = require('express');
const router = express.Router();
const prodController = require('../controllers/product')

router.get('/:id', prodController.detail);
router.get('/categoria/:categoryName', prodController.byCategory);
router.get('/', prodController.products)





module.exports = router;