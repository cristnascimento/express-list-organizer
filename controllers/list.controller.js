const service = require('../services/list.service');

const findAll = (req,res) => {
    service.hello();
    let items = service.getItems();
    res.render('lists', {data: items});
}

const addItem = (req, res) => {
    service.addItem(req.body.description);
    res.redirect('lists');
}

module.exports = {
    findAll,
    addItem
}