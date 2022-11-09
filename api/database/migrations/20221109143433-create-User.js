'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User', {
      id:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       unique: true,
       primaryKey: true,
       allowNull: false
      },
      fullname: {
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
       type: DataTypes.TEXT
      }, 

     });
 },

 down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('User');

 }
};
