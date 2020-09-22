const sequelize = require('./dbcon')
const Sequelize = require('sequelize')



const User = sequelize.define('user',{
    name:{
        type:Sequelize.STRING
    },
    gender:{
        type:Sequelize.ENUM('male','female')
    },
    dateOfBirth:{
        type:Sequelize.DATE
    },
    email:{
        type:Sequelize.STRING
    },
    phoneNumber:{
        type:Sequelize.STRING
    },
    maritalStatus:{
        type:Sequelize.ENUM('single','married')
    },
    address:{
        type:Sequelize.STRING
    },
    genotype:{
        type:Sequelize.STRING
    },
    tribe:{
        type:Sequelize.STRING
    },
    religion:{
        type:Sequelize.STRING
    },
    bloodGroup:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.BOOLEAN
    },
    code:{
        type:Sequelize.STRING
    }
})

User.sync()
module.exports = User
