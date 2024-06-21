const express = require('express')
const router = express.Router()
const apiProducts = require('../../controllers/api/product');


router.get('/:id', apiProducts.detail)
router.get('/categoria/:categoryName', apiProducts.category);
router.get('/image/:image', apiProducts.image)
router.get('/', apiProducts.products)



module.exports = router