const sequelize = require('./sequelize');
const UserInit = require('./User');
const User = UserInit(sequelize);

(async () => {
    const jane = await User.create({ firstName: "Jane" });
    // Jane exists in the database now!
    console.log(jane instanceof User); // true
    console.log(jane.firstName); // "Jane"
})();