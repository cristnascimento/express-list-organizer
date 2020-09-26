const { Sequelize, DataTypes, Model } = require('sequelize');

class Lists extends Model {}

const init = (sequelize) => {
    Lists.init({
      // Model attributes are defined here
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Lists' // We need to choose the model name
    });

    return Lists;
}

module.exports = init;