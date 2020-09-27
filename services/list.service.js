const sequelize = require('../models/sequelize');
const ListsInit = require('../models/Lists');
const ItemsInit = require('../models/Items');
const listsDAO = require('../models/ListsDAO');
const itemsDAO = require('../models/ItemsDAO');

const Lists = ListsInit(sequelize);
const Items = ItemsInit(sequelize);

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

const findOne = () => {
    console.log("findAll method");
    return itemsDAO.findAll(Items);
}

module.exports = {
    getItems,
    addItem,
    findAll,
    add,
    findOne
}