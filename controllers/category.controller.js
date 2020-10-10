const categoryService = require('../services/category.service');
const listsService = require('../services/list.service');

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
    console.log("==============================> category id: " + req.params.id);
    listsService.findSpecific(req.params.id)
    .then(items2 => {
        items2 = JSON.parse(JSON.stringify(items2));
        res.render('lists', {menu: items2, data: items2, categoryId: req.params.id, isList: true});
    });
}

const updateCategory = (req, res) => {
    categoryService.updateCategory(req.body)
    .then( updatedItem => {
        let response = JSON.stringify({status: "ok", msg: "Categoria atualizada com sucesso.", result: req.body});
        res.end(response);
    });
}

module.exports = {
    findAll,
    addItem,
    findOne,
    updateCategory
}