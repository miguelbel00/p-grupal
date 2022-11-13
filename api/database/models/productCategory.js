const {
  
  Model
} = require('sequelize'); 

module.exports = (sequelize, DataTypes) => {
  class productCategory extends Model {
    static associate(models) {
      // define association here
    }
  };
  productCategory.init({
    productId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: true,
    modelName: 'productCategory',
  })
  return productCategory;
};