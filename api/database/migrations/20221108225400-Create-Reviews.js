'use strict';

const idCreator = require("../../functions/idCreator.js")
const { DataTypes }= require("sequelize")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Reviews", {
      id:{
          type:DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
          defaultValue: idCreator()
      },
      comment:{
          type:DataTypes.TEXT,
          allowNull: false
      },
      rating:{
          type:DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0
      },
  })
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('Reviews')
  }
};
