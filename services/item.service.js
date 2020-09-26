const sequelize = require('../models/sequelize');

const ItemsInit = require('../models/Items');
const itemsDAO = require('../models/ItemsDAO');

const Items = ItemsInit(sequelize);


const add = (obj) => {
    console.log("ADD method");
    let newItem = itemsDAO.add(Items, {description: obj.description, fk_listId: obj.listId});
}


const findOne = (listId) => {
    console.log("findAll method");
    return itemsDAO.findAll(Items, listId);
}

module.exports = {      
    add,
    findOne
}