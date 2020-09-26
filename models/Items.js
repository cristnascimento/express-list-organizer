const { Sequelize, DataTypes, Model } = require('sequelize');
const ListsInit = require("./Lists");

class Items extends Model {}

const init = (sequelize) => {
    Items.init({
        description: {  
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Items' // We need to choose the model name
    });

    let Lists = ListsInit(sequelize);
    Items.belongsTo(Lists, {foreignKey: 'fk_listId', targetKey: 'id'});

    return Items;
}

module.exports = init;