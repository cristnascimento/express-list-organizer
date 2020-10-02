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
    res.redirect('/categories/'+req.params.categoryId+'/lists/'+req.body.listId);
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


const updateItem = (req, res) => {
    console.log("--------------- update item ---------------");
    console.log(req.body.id);
    console.log(req.body.description);
    let response = JSON.stringify({status: "ok", msg: "Item atualizado com sucesso.", result: req.body});
    res.end(response);
}

module.exports = {
    findAll,
    addItem,
    findOne,
    updateItem
}