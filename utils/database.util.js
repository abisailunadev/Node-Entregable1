const {Sequelize, DataTypes} = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '68374672',
  port: 5432,
  database: 'checker',
  logging: false
});

module.exports = { db, DataTypes };