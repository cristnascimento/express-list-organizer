const sequelize = require('../models/sequelize');

const CategoryInit = require('../models/Category');
const categoryDAO = require('../models/CategoryDAO');

const Category = CategoryInit(sequelize);

const add = (obj) => {
    console.log("ADD method");
    let newItem = categoryDAO.add(Category, {name: obj.name});
}

const findAll = () => {
    console.log("findAll method");
    return categoryDAO.findAll(Category);
}

const findOne = (categoryId) => {
    console.log("findAll method");
    return categoryDAO.findOne(Items, categoryId);
}

const updateCategory = (category) => {
    console.log("update category method");
    return categoryDAO.update(Category, category);
}

module.exports = {
    add,
    findAll,
    findOne,
    updateCategory
}