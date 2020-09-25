var express = require('express');
var router = express.Router();
var controller = require('../controllers/list.controller');

// Pages

// API
router.get("/", controller.findAll);

module.exports = router;
