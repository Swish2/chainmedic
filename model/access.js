const sequelize = require('./dbcon')
const Sequelize = require('sequelize')
const User = require('./user')


const Access = sequelize.define('access',{
    
    hospitalId:{
        type:Sequelize.INTEGER
    },

    userId:{
        type:Sequelize.INTEGER,
        references: {
            model: User, 
            key: 'id',
         }
    },

    status:{
        type:Sequelize.BOOLEAN
    }
})

Access.sync()

module.exports = Access