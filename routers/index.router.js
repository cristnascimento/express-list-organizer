var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.controller');

// Pages

// API
router.get("/", controller.index);

module.exports = router;
