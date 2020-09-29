const Sequelize = require('sequelize')

const sequelize = new Sequelize('codevolu_chainmedic', 'codevolu_swish', 'o[CUlcGMtaL%', {
    host: 'codevolution.com.ng',
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