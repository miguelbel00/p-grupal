'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transaction', {
      id:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       unique: true,
       primaryKey: true,
       allowNull: false
      },
      value: {
       type: DataTypes.FLOAT,
       allowNull: false
      },
      description: {
       type: DataTypes.TEXT,
       allowNull: false
      },
      status: {
       type: DataTypes.STRING
      }, 

     });
 },

 down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('Transaction');

 }
};
