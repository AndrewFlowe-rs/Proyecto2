const express = require('express');
const userControllerApi = require('../../controllers/api/authenticathion/user.controller.api');
const router = express.Router();

//Desde app llega API/USER
router.get('/', userControllerApi.list);
router.get('/:id', userControllerApi.detail);

module.exports = router