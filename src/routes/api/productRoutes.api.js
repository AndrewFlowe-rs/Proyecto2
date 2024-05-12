const express = require('express');
const productControllerApi = require('../../controllers/api/product.controller.api');
const router = express.Router();
// Desde app llega api/products
router.get('/', productControllerApi.listproducts);
router.get('/:id', productControllerApi.detailproducts);


module.exports = router