'use strict';
const { uuid} = require("uuidv4")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Transaction, {
        foreignKey: 'userId'
      })
      User.hasMany(models.Review, {
        foreignKey: 'userId'
      })
    }
  };
  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar:DataTypes.TEXT,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN   
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'User',
  }),
  User.addHook('beforeSave', async (user) => {
    return user.id = uuid();
  });
  return User;
};