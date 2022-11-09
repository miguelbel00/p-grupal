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
        type: DataTypes.INTEGER
       }, 

      });

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     * 
     */
     await queryInterface.dropTable('User');

  }
};
