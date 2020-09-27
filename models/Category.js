const { Sequelize, DataTypes, Model } = require('sequelize');

class Category extends Model {}

const init = (sequelize) => {
    Category.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Category' // We need to choose the model name
    });

    return Category;
}

module.exports = init;