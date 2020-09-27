const service = require('../services/list.service');
const itemService = require('../services/item.service');

const findAll = (req,res) => {
    service.findAll({category: req.params.id})
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items = JSON.parse(JSON.stringify(items));
        res.render('lists', {menu: items, data: items, category: req.params.id});
    });
}

const addItem = (req, res) => {
    console.log('[lists] addItem'); 
    service.add(req.body);
    res.redirect('categories/'+req.body.categoryId);
}

const findOne = (req, res) => {
    console.log("==============================> list id: " + req.params.id);
    let items1;
    service.findAll({category: 'project'})
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items1 = JSON.parse(JSON.stringify(items));
        return itemService.findOne(req.params.id);
    })
    .then(items2 => {
        items2 = JSON.parse(JSON.stringify(items2));
        res.render('items', {menu: items1, data: items2, listId: req.params.id});
    });
}

module.exports = {
    findAll,
    addItem,
    findOne
}