var express = require('express');
var router = express.Router({ mergeParams : true });
var controller = require('../controllers/item.controller');

// Pages

// API
router.get("/", controller.findOne);
router.post("/", controller.addItem);
router.post("/:itemId", controller.updateItem);
router.delete("/:itemId", controller.deleteItem);

module.exports = router;
