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

module.exports = {
    hello,
    getContacts,
    getItems,
    addItem
}