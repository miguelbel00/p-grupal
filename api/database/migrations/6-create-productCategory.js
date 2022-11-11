
'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productCategory', {
      productId: {
        type: Sequelize.UUID,
        references: {
          model: 'Products',
          key: 'id'
        },
        onDelet: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      categoryId: {
        type: Sequelize.UUID,
        references: {
          model: 'Categories',
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
     });
 },

 down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('productCategory');

 }
};

