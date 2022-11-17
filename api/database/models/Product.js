"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: "productCategory",
        foreignKey : "productId",
        constraints:false
      });
      Product.belongsToMany(models.Transaction, {
        through: "transactionProduct",
        foreignKey : "productId",
        constraints: false
      });
      Product.hasMany(models.Review, {
        foreignKey: 'productId'
      })
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.ARRAY(DataTypes.STRING),
      price: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      sold: DataTypes.INTEGER
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Product",
    }
  );
  return Product;
};