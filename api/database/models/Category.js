'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {

    }
  };
  Category.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Category',
  });
  return Category;
};