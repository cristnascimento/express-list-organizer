const sequelize = require('../models/sequelize');
const ListsInit = require('../models/Lists');
const listsDAO = require('../models/ListsDAO');
const Lists = ListsInit(sequelize);

let contacts = require("../todo.mock-data");

let nextId = 5;

let items = [
    {
      id:1,
      description: "William",
      },
    {
      id:2,
      description: "Edgar",
      },
    {
      id:3,
      description: "Natasha",
    },
    {
        id:4,
        description: "Roman",
    },
];

const getContacts = function() {
    return contacts;
}

const hello = () => {

}

const getItems = () => {
    return items;
}

const addItem = (item) => {
    items.push({id: nextId, description: item});
    nextId++;
}

const add = (obj) => {
    console.log("ADD method");
    let newItem = listsDAO.add(Lists, {description: obj.description, category: obj.category});
}

const findAll = () => {
    console.log("findAll method");
    return listsDAO.findAll(Lists);
}

module.exports = {      
    hello,
    getContacts,
    getItems,
    addItem,
    findAll,
    add
}