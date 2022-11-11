const {
  
  Model
} = require('sequelize'); 
const { uuid } = require('uuidv4')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Product, {
        through: "product_has_category",
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
  }),
  Category.addHook('beforeSave', async (category) => {
    return category.id = uuid();
  });
  return Category;
};