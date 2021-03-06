const { Sequelize, DataTypes, Model } = require('sequelize');

class User extends Model {}

const init = (sequelize) => {
    User.init({
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'User' // We need to choose the model name
    });

    return User;
}

module.exports = init;