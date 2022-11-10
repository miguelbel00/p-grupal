'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // define association here
      /* Test.hasMany(models.User,{
        foreignKey:'roleId'
      }) */
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