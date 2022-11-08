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
        id:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull: false
        },
        image:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue: 0
        },
        stock:{
            type:DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0 
        }
    }, {
      sequelize,
      modelName: 'Products',
    });
    return Products;
  };



// module.exports = (sequelizeInstance)=>{
//     sequelizeInstance.define("Products",{
//         id:{
//             type:DataTypes.STRING,
//             primaryKey: true,
//             allowNull: false,
//         },
//         name:{
//             type:DataTypes.STRING,
//             allowNull: false
//         },
//         description:{
//             type:DataTypes.TEXT,
//             allowNull: false
//         },
//         image:{
//             type:DataTypes.ARRAY(DataTypes.STRING),
//             allowNull: false
//         },
//         price:{
//             type:DataTypes.FLOAT,
//             allowNull:false,
//             defaultValue: 0
//         },
//         stock:{
//             type:DataTypes.INTEGER,
//             allowNull: false,
//             defaultValue: 0 
//         }
//     },{timestamps:false})
// }