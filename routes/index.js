const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');

router.get('/', indexController.get);

router.post('/', indexController.update);

module.exports = router;