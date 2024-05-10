const express = require('express')
const router = express.Router()
const apiProducts = require('../../controllers/api/product')


router.get('/:id', apiProducts.detail)
router.get('/', apiProducts.products)



module.exports = router