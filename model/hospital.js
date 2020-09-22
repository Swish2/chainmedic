const sequelize = require('./dbcon')
const Sequelize = require('sequelize')


const Hospital = sequelize.define('hospital',{
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    phoneNumber:{
        type:Sequelize.STRING
    },
    address:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    regNumber:{
        type:Sequelize.STRING
    },
    publicKey:{
        type:Sequelize.STRING
    },
    privateKey:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.BOOLEAN
    },
    code:{
        type:Sequelize.STRING
    }
})

Hospital.sync()
module.exports = Hospital


