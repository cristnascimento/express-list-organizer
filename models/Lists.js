const { Sequelize, DataTypes, Model } = require('sequelize');
const CategoryInit = require('./Category');

class Lists extends Model {}

const init = (sequelize) => {
    Lists.init({
        description: {  
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Lists' // We need to choose the model name
    });

    
    let Category = CategoryInit(sequelize);
    Lists.belongsTo(Category, {foreignKey: 'categoryId', targetKey: 'id'});

    return Lists;
}

module.exports = init;