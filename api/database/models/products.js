

const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
        /* Test.hasMany(models.User,{
          foreignKey:'roleId'
        }) */
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


