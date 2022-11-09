'use strict';

const { UUIDV4, DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue:UUIDV4
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      description:{
        type:DataTypes.TEXT
      },
      status:{
        type:DataTypes.ENUM("complete", "cancelled", "pending")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};
