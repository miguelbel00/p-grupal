'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       primaryKey: true,
      },
      fullName: {
       type: DataTypes.STRING,
       allowNull: false
      },
      email: {
       type: DataTypes.STRING,
       allowNull: false
      },
      avatar:{
         type:DataTypes.TEXT
      },
      password: {
       type: DataTypes.STRING,
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
