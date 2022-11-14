'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id:{
       type: DataTypes.UUID,
       primaryKey: true,
       defaultValue:DataTypes.UUIDV4
      },
      fullName: {
       type: DataTypes.STRING,
       allowNull: false
      },
      email: {
       type: DataTypes.STRING,
       allowNull: false
      },
      password: {
       type: DataTypes.STRING,
       allowNull: false
      },
      phone: {
       type: DataTypes.STRING
      }, 
      isAdmin: {
       type: DataTypes.BOOLEAN,
       defaultValue: false
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
    await queryInterface.dropTable('Users');

 }
};
