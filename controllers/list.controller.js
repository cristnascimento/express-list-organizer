const service = require('../services/list.service');

const findAll = (req,res) => {
    service.findAll()
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items = JSON.parse(JSON.stringify(items));
        res.render('lists', {data: items});
    });
}

const addItem = (req, res) => {
    service.add(req.body.description);
    res.redirect('lists');
}

module.exports = {
    findAll,
    addItem
}