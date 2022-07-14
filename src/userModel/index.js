'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./userSchema');
require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'sqlite::memory';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});   

// const sequelize = new Sequelize(DATABASE_URL);

const UserModel = userSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  UserModel
}
