const service = require('../services/list.service');
const itemService = require('../services/item.service');

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
    itemService.add(req.body);
    res.redirect('lists/'+req.body.listId);
}

const findOne = (req, res) => {
    let items1;
    service.findAll({category: 'project'})
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items1 = JSON.parse(JSON.stringify(items));
        return itemService.findOne();
    })
    .then(items2 => {
        items2 = JSON.parse(JSON.stringify(items2));
        res.render('items', {menu: items1, data: items2, listId: 1});
    });
}

module.exports = {
    findAll,
    addItem,
    findOne
}