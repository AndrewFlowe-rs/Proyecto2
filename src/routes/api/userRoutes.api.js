const express = require('express');
const userControllerApi = require('../../controllers/api/authenticathion/user.controller.api');
const router = express.Router();

router.get('/', userControllerApi.list);
router.get('/detail/:id', userControllerApi.detail);

module.exports = router