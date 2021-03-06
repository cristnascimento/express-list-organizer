var express = require('express');
var router = express.Router();
var controller = require('../controllers/category.controller');

// Pages

// API
router.get("/:id", controller.findOne);
router.post("/:id", controller.updateCategory);
router.get("/", controller.findAll);
router.post("/", controller.addItem);
router.delete("/", controller.deleteCategory);

module.exports = router;
