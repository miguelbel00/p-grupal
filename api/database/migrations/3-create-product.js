
'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      createdAt: {
         allowNull: false,
         type: Sequelize.DATE
       },
       updatedAt: {
         allowNull: false,
         type: Sequelize.DATE
       },
       deletedAt: {
         type: Sequelize.DATE
       }
     });
 },

 down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('Products');

 }
};

