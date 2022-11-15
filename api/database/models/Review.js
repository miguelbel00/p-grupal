'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Product, {
        foreignKey: 'productId'
      }),
      Review.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  };
  Review.init({
    comment: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Review',
  });
  return Review;
};