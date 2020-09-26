var express = require('express');
var router = express.Router();
var controller = require('../controllers/item.controller');

// Pages

// API
router.get("/", controller.findOne);
router.post("/", controller.addItem);

module.exports = router;
