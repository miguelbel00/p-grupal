'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Category.init({
    value: DataTypes.FLOAT,
    description:DataTypes.TEXT,
    Status:DataTypes.ENUM
  }, {
    sequelize,
    paranoid: true,
    timestamps: false,
    modelName: 'Transactions',
  });
  return Transactions;
};