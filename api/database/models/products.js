
const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Products extends Model {

      static associate(models) {

      }
    };
    Products.init({
      name:DataTypes.STRING,
      image:DataTypes.ARRAY,
      description:DataTypes.TEXT,
      price:DataTypes.FLOAT,
      stock:DataTypes.INTEGER
    },{
      sequelize,
      paranoid: true,
      timestamps: false,
      modelName: 'Products',
    });
    return Products;
  };


