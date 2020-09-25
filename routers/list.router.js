var express = require('express');
var router = express.Router();

// Pages

// API
router.get("/", function (req,res) {
    res.redirect("/list/todo/1");
});

module.exports = router;
