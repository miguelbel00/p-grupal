'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product', {
      id:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       unique: true,
       primaryKey: true,
       allowNull: false
      },
      name: {
       type: DataTypes.STRING,
       allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
       },
      image: {
       type: DataTypes.ARRAY(DataTypes.STRING),
       allowNull: false
      },
      price: {
       type: DataTypes.FLOAT,
       allowNull: false
      },
      stock: {
       type: DataTypes.INTEGER
      }, 

     });
 },

 down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('Product');

 }
};

