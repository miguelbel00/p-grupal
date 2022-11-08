require("dotenv").config()
const {Sequelize, Op} = require("sequelize")
const {DB_USER, DB_HOST, DB_PORT, DB_PASSWORD} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,{
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    native:false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
  })





  
  module.exports = {
    ...sequelize.models,
    connect:sequelize,
    Op,
  }