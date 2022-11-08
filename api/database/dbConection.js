require("dotenv").config()
const {Sequelize, Op} = require("sequelize")
const {DB_USER, DB_HOST, DB_PORT, DB_PASSWORD, DB_NAME} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
    logging: false,
    native:false,
    dialect: 'postgres'
  })
  
  module.exports = {
    ...sequelize.models,
    connect:sequelize,
    Op,
  }