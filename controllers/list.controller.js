const service = require('../services/list.service');

const findAll = (req,res) => {
    service.hello();
    res.redirect("/list/todo/1");
}

module.exports = {
    findAll
}