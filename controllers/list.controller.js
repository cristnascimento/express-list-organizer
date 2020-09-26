const service = require('../services/list.service');

const findAll = (req,res) => {
    service.findAll({category: 'project'})
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items = JSON.parse(JSON.stringify(items));
        res.render('lists', {menu: items, data: items, category: 'project'});
    });
}

const addItem = (req, res) => {
    service.add(req.body);
    res.redirect('lists');
}

module.exports = {
    findAll,
    addItem
}