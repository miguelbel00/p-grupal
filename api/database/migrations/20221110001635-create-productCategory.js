
'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_has_category', {
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
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('product_has_category');

 }
};

