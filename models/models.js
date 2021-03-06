const sequelize = require('./sequelize');
const UserInit = require("./User");
const ListsInit = require("./Lists");
const ItemsInit = require("./Items");
const CategoryInit = require("./Category");

const User = UserInit(sequelize);
const Lists = ListsInit(sequelize);
const Items = ItemsInit(sequelize);
const Category = CategoryInit(sequelize);

console.log("initialize sequelize");

const createTables = async (callback) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        //await sequelize.sync({ force: true });
        await sequelize.sync();
        console.log('Tables created!.');
        callback(null);
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
        callback(error);
    }
}

module.exports = {
    createTables
}