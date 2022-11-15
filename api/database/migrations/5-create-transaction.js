'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
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
       type: DataTypes.ENUM('Pending', 'Completed','Canceled'),
       defaultValue: 'Pending' 
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelet: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('Transactions');

 }
};
