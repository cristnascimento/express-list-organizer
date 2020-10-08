const service = require('../services/list.service');
const itemService = require('../services/item.service');

const findAll = (req,res) => {
    service.findAll(req.params.id)
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items = JSON.parse(JSON.stringify(items));
        res.render('lists', {menu: items, data: items, categoryId: req.params.categoryId});
    });
}

const addItem = (req, res) => {
    console.log('[lists] addItem'); 
    service.add(req.body);
    res.redirect('/categories/'+req.body.categoryId);
}

const findOne = (req, res) => {

    console.log("==============================> list id: " + req.params.id);
    console.log("==============================> categ id: " + req.params.categoryId);
    console.log('req.params = '+ req.params);
    let items1;
    service.findAll(req.params.categoryId)
    .then(items => {
        console.log(items);
        // this will fix handlebars forbidden access to ORM templates
        items1 = JSON.parse(JSON.stringify(items));
        return itemService.findOne(req.params.id);
    })
    .then(items2 => {
        items2 = JSON.parse(JSON.stringify(items2));
        res.render('items', {menu: items1, data: items2, categoryId: req.params.categoryId, listId: req.params.id, isList: true});
    });
}

const updateList = (req, res) => {
    service.updateList(req.body)
    .then( updatedItem => {
        console.log('return value :::');
        console.log(updatedItem);
        let response = JSON.stringify({status: "ok", msg: "Item atualizado com sucesso.", result: req.body});
        res.end(response);
    });
}

const deleteList = (req, res) => {
    service.deleteList(req.body.id)
    .then( updatedItem => {
        let response = JSON.stringify({status: "ok", msg: "Item removido com sucesso.", result: req.body});
        res.end(response);
    });

}

module.exports = {
    findAll,
    addItem,
    findOne,
    updateList,
    deleteList
}