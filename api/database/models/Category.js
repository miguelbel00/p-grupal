const {
  
  Model
} = require('sequelize'); 
const { uuid } = require('uuidv4')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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