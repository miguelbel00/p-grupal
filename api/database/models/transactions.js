
const {
    Model
  } = require('sequelize');
const idCreator = require("../../functions/idCreator");
  module.exports = (sequelize, DataTypes) => {
    class Transactions extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
        /* Test.hasMany(models.User,{
          foreignKey:'roleId'
        }) */
      }
    };
    Transactions.init({
        id:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            defaultValue: idCreator()
        },
        value:{
            type:DataTypes.FLOAT,
            allowNull: false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull: false,
            defaultValue: "NOT DESCRIPTION"
        },

        status:{
            type:DataTypes.ENUM("pending", "cancelled", "completed"),
            allowNull: false
        }
    }, {
      sequelize,
      modelName: 'Transactions',
    });
    return Transactions;
  };
