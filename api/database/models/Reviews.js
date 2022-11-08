const {DataTypes} = require("sequelize")

const {
    Model
  } = require('sequelize');
const idCreator = require('../../functions/idCreator');
  module.exports = (sequelize, DataTypes) => {
    class Reviews extends Model {
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
    Products.init({
      comment:DataTypes.TEXT,
      rating:DataTypes.FLOAT,
    },{
      sequelize,
      paranoid: true,
      timestamps: false,
      modelName: 'Reviews',
    });
    return Reviews;
  };


