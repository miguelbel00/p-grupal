const {
  
  Model
} = require('sequelize'); 

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Product, {
        through: "productCategory",
        foreignKey : "categoryId",
        constraints:false
      });
    }
  };
  Category.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Category',
  })
  return Category;
};