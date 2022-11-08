
const {
    Model
  } = require('sequelize');
const idCreator = require("../../functions/idCreator");
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
    Reviews.init({
        id:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            defaultValue: idCreator()
        },
        comment:{
            type:DataTypes.TEXT,
            allowNull: false
        },
        rating:{
            type:DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
    }, {
      sequelize,
      modelName: 'Reviews',
    });
    return Reviews;
  };
