const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getLogs);

module.exports = router;
