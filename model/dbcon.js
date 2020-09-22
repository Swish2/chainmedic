const Sequelize = require('sequelize')

const sequelize = new Sequelize('sql7366882', 'sql7366882', 'DrvplpAn4i', {
    host: 'sql7.freesqldatabase.com',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });


  module.exports = sequelize