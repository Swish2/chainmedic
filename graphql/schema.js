import {gql} from '@apollo/client'

export const LOGIN_HOSPITAL = gql`
    mutation LoginHospital(
        $email:String!,
        $password:String!
    ){
        loginHospital(input:{
            email:$email,
            password:$password
        }){
            message
            status
            token
        }
    }
`

export const LOGIN_USER = gql`
    mutation Login(
        $email:String!,
        $password:String!
    ){
        login(input:{
            email:$email,
            password:$password
        }){
            message
            status
            token
        }
    }
`

export const GET_USER_INFO = gql`
    query{
        getUserProfile{
            name
            email
            phoneNumber
            address
            gender
            dateOfBirth
            bloodGroup
            genotype
            maritalStatus
        }
    }

`

export const GET_ACCESS_BY_HOSPITAL = gql`
    query{
        getAccessByHospital{
            id
            createdAt
            user{
                id
                name
                email
                phoneNumber
                address
            }
        }
    }

`


export const GET_ALL_RECORD_BY_USER_ID = gql`
    query GetAllRecordByUserId($userId:Int){
        getAllRecordByUserId(userId:$userId){
            transId
            createdAt
            hospital{
                name
                address
                phoneNumber
            }
            user{
                address
                phoneNumber
            }
          }
    }
`
export const GET_ALL_RECORD_BY_USER = gql`
    query {
        getAllRecordByUser{
            transId
            createdAt
            hospital{
                name
            }
          }
    }
`

export const CREATE_RECORD = gql`
    mutation CreateRecord(
        $bp:String,
        $diabetics:String,
        $allergies:String,
        $smoke:String,
        $drink:String,
        $surgery:String,
        $admission:String,
        $medication:String,
        $kids:Int,
        $userId:Int,
        $ulcer:String,
        $hypertensive:String,
        $diagnosis:String,
    ){
        createRecord(input:{
            bp:$bp,
            diabetics:$diabetics,
            allergies:$allergies,
            smoke:$smoke,
            drink:$drink,
            surgery:$surgery,
            admission:$admission,
            medication:$medication,
            kids:$kids,
            ulcer:$ulcer,
            hypertensive:$hypertensive,
            diagnosis:$diagnosis,
            userId:$userId
        }){
            message
            status
        }
    }
`

export const CREATE_HOSPITAL = gql`
    mutation CreateHospital(
        $name:String!,
        $email:String!,
        $phoneNumber:String!,
        $password:String!,
        $address:String!
    ){
        createHospital(input:{
            name:$name,
            email:$email,
            phoneNumber:$phoneNumber,
            password:$password,
            address:$address
        }){
            message
            status
        }
    }
`

export const GET_USER_INFO_BY_ID = gql`
    query GetUserInfoById($id:Int){
        getUserInfoById(id:$id){
            name
            address
            gender
            dateOfBirth
            maritalStatus
            genotype
            bloodGroup
            email
            phoneNumber
        }
    }
`

export const CREATE_USER = gql`
    mutation CreateUser(
        $name:String!,
        $email:String!,
        $phoneNumber:String!,
        $password:String!,
        $address:String!
    ){
        createUser(input:{
            name:$name,
            email:$email,
            phoneNumber:$phoneNumber,
            password:$password,
            address:$address
        }){
            message
            status
        }
    }
`

export const CREATE_ACCESS = gql`
mutation CreateAccess($email:String!)
    {
        createAccess(email:$email){
        message
        status
        }
    }
`

export const UPDATE_USER = gql`
    mutation UpdateUser(
        $name: String!
        $phoneNumber: String!
        $dateOfBirth: String
        $address: String!
        $gender: String!
        $maritalStatus: String
        $genotype: String
        $bloodGroup: String
    ){
        updateUser(input :{
            name:$name,
            phoneNumber:$phoneNumber,
            dateOfBirth:$dateOfBirth,
            address:$address,
            gender:$gender,
            maritalStatus:$maritalStatus,
            genotype:$genotype,
            bloodGroup:$bloodGroup
        }) {
            message
            status
        }
    }

`

export const UPDATE_HOSPITAL = gql`
    mutation UpdateHospital(
        $name: String!
        $phoneNumber: String!
        $address: String!
        $regNumber: String!
    ){
        updateHospital(input:{
            name:$name,
            phoneNumber:$phoneNumber,
            address:$address,
            regNumber:$regNumber
        }){
            message
            status
        }
    }
`

export const GET_HOSPITAL_PROFILE = gql`
    query{
        getHospitalProfile{
            name
            email
            address
            regNumber
            publicKey
            privateKey
            phoneNumber
        }
    }

`

export const VERIFY_USER = gql`
    mutation VerifyUser(
        $email:String!,
        $code:String!
    ){
        verifyUser(input:{
            email:$email,
            code:$code
        }){
            message
            status
        }
    }
`

export const VERIFY_HOSPITAL = gql`
    mutation VerifyHospital(
        $email:String!,
        $code:String!
    ){
        verifyHospital(input:{
            email:$email,
            code:$code
        }){
            message
            status
        }
    }
`