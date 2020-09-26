var express = require('express');
var router = express.Router();
var controller = require('../controllers/list.controller');

// Pages

// API
router.get("/:id", controller.findOne);
router.get("/", controller.findAll);
router.post("/", controller.addItem);

module.exports = router;
