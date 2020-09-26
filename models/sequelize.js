const { Sequelize } = require('sequelize');

console.log("New sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'storage/database.sqlite'
});

module.exports = sequelize;