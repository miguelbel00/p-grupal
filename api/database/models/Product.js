'use strict';
const {uuid} = require("uuidv4")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image:DataTypes.ARRAY,
    price:DataTypes.FLOAT,
    stock:DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Product',
  });
  Product.addHook('beforeSave', async (product) => {
    return product.id = uuid();
  });
  return Product;
};