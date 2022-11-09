'use strict';

const { DataTypes, UUIDV4 }= require("sequelize")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
          id:{
              type:DataTypes.STRING,
              primaryKey: true,
              allowNull: false,
              defaultValue: UUIDV4
          }, 
          name:{
              type:DataTypes.STRING,
              allowNull: false
          },
          description:{
              type:DataTypes.TEXT,
              allowNull: false
          },
          image:{
              type:DataTypes.ARRAY(DataTypes.STRING),
              allowNull: false
          },
          price:{
              type:DataTypes.FLOAT,
              allowNull:false,
              defaultValue: 0
          },
          stock:{
              type:DataTypes.INTEGER,
              allowNull: false,
              defaultValue: 0 
          }
      })
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('Products')
  }
};
