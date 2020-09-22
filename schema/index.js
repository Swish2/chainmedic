const { gql } = require('apollo-server')



const typeDefs = gql`

    input CreateRecordInput{
        bp:String,
        diabetics:String,
        allergies:String,
        smoke:String,
        drink:String,
        surgery:String,
        admission:String,
        medication:String,
        ulcer:String,
        hypertensive:String,
        diagnosis:String,
        kids:Int,
        mode:String,
        userId:Int
    }

    input CreateHospitalInput{
        name:String!,
        email:String!,
        password:String!,
        phoneNumber:String!,
        address:String!
    }

    input CreateUserInput{
        name:String!,
        password:String!,
        phoneNumber:String!,
        email:String!
        address:String!
    }

    input UpdateUserInput{
        name:String!,
        phoneNumber:String!,
        dateOfBirth:String,
        address:String!,
        gender:String!,
        maritalStatus:String,
        genotype:String,
        bloodGroup:String
    }

    input UpdateHospitalInput{
        name:String!,
        phoneNumber:String!,
        address:String!,
        regNumber:String!
    }

    input UserLoginInput{
        email:String!,
        password:String!
    }

    input VerifyInput{
        email:String!,
        code:String!
    }

    type Record{
        transId:String
        createdAt:String,
        user:User
        hospital:Hospital
    }

    type HospitalAccess{
        hospital:Hospital,
        createdAt:String,
        id:Int,
        user:User
    }


    type GenericResponse{
        status:Boolean,
        message:String
    }

    type LoginResponse{
        status:Boolean,
        message:String,
        token:String
    }

    type User{
        id:Int,
        name:String,
        gender:String,
        dateOfBirth:String,
        maritalStatus:String,
        address:String,
        genotype:String,
        tribe:String,
        religion:String,
        bloodGroup:String,
        email:String,
        phoneNumber:String
    }

    type Hospital{
        id:Int,
        name:String,
        regNumber:String,
        email:String,
        address:String,
        phoneNumber:String,
        publicKey:String,
        privateKey:String,
    }

    type Query{
        getUsers:[User],
        getHospital:[Hospital]
        getAccessByHospital:[HospitalAccess]
        getAllRecordByUserId(userId:Int):[Record]
        getAllRecordByUser:[Record]
        getUserInfoById(id:Int):User
        getAccessByUser:[HospitalAccess]
        getUserProfile:User,
        getHospitalProfile:Hospital
    }
    
    type Mutation{
        createUser(input:CreateUserInput):GenericResponse,
        login(input:UserLoginInput):LoginResponse,
        createHospital(input:CreateHospitalInput):GenericResponse,
        loginHospital(input:UserLoginInput):LoginResponse,
        createAccess(email:String!):GenericResponse,
        createRecord(input:CreateRecordInput):GenericResponse
        updateUser(input:UpdateUserInput):GenericResponse
        updateHospital(input:UpdateHospitalInput):GenericResponse,
        verifyUser(input:VerifyInput):GenericResponse,
        verifyHospital(input:VerifyInput):GenericResponse
    }
`

module.exports = typeDefs