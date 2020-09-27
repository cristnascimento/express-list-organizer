const categoryService = require('../services/category.service');

const findAll = (req,res) => {
    categoryService.findAll()
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items = JSON.parse(JSON.stringify(items));
        res.render('category', {menu: items, data: items, isCategory: true});
    });
}

const addItem = (req, res) => {
    categoryService.add(req.body);
    res.redirect('categories');
}

const findOne = (req, res) => {
    console.log("==============================> list id: " + req.params.id);
    let items1; /*
    categoryService.findAll({id: req.params.id})
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items1 = JSON.parse(JSON.stringify(items));
        return itemService.findOne(req.params.id);
    })
    .then(items2 => {
        items2 = JSON.parse(JSON.stringify(items2));
        res.render('items', {menu: items1, data: items2, listId: req.params.id});
    });*/
}

module.exports = {
    findAll,
    addItem,
    findOne
}