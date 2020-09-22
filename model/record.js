const sequelize = require('./dbcon')
const Sequelize = require('sequelize')
const User = require('./user')
const Hospital = require('./hospital')


const Record = sequelize.define('record',{
    hospitalId:{
        type:Sequelize.INTEGER,
        references: {
            model: Hospital, 
            key: 'id',
         }
    },
    
    patientId:{
        type:Sequelize.INTEGER,
        references: {
            model: User, 
            key: 'id',
         }
    },
    
    transId:{
        type:Sequelize.STRING
    },
    
    status:{
        type:Sequelize.BOOLEAN
    }
})

Record.sync()

module.exports = Record
