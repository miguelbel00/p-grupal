const {uuid} = require("uuidv4")

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
    }
  };
  Transaction.init({
    value: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Transaction',
  });
  Transaction.addHook('beforeSave', async (transaction) => {
    return transaction.id = uuid();
  })
  return Transaction;
};

