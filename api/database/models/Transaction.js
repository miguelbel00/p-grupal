'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      // define association here
      /* Test.hasMany(models.User,{
        foreignKey:'roleId'
      }) */
    }
  };
  Transaction.init({
    value: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};