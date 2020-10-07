var express = require('express');
var router = express.Router({ mergeParams : true });
var controller = require('../controllers/list.controller');

// Pages

// API
router.get("/:id", controller.findOne);
router.post("/:id", controller.updateList);
router.get("/", controller.findAll);
router.post("/", controller.addItem);

module.exports = router;
