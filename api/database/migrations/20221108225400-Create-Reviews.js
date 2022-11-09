'use strict';


const { DataTypes, UUIDV4 }= require("sequelize")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Reviews", {
      id:{
          type:DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
          defaultValue: UUIDV4
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
