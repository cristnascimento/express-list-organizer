const sequelize = require('./sequelize');
const UserInit = require("./User");
const User = UserInit(sequelize);

console.log("initialize sequelize");

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: true });
        console.log('Tables created!.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();