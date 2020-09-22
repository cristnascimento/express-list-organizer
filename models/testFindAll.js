const sequelize = require('./sequelize');
const UserInit = require('./User');
const User = UserInit(sequelize);

( async () => {
    const users = await User.findAll();
    console.log(users);
})();
