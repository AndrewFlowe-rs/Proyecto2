const express = require('express')
const {categorias }= require('../../controllers/api/categorias')
const router = express.Router()


router.get('/', categorias)

module.exports = router