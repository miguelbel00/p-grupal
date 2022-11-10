'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Review', {
      id:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       unique: true,
       primaryKey: true,
       allowNull: false
      },
      comment: {
       type: DataTypes.TEXT,
       allowNull: false
      },
      rating: {
       type: DataTypes.FLOAT,
       allowNull: false
      } 
     });
 },

 down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('Review');

 }
};