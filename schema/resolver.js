const User = require('../model/user')
const Hospital = require('../model/hospital')
const Access = require('../model/access')
const Record = require('../model/record')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const BigchainDB = require('bigchaindb-driver')
const sgMail = require('@sendgrid/mail');
const otpGenerator = require('otp-generator')

const API_PATH = 'https://test.ipdb.io/api/v1/'
const conn = new BigchainDB.Connection(API_PATH)

const handleEmail = (to,body,subject)=>{
    console.log(to)
    sgMail.setApiKey("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");
    const msg = {
    to: to,
    from: 'support@codevolution.com.ng',
    subject: subject,
    text: body,
    html: body,
    };
sgMail.send(msg).then(res=>console.log(res)).catch(e=>{})
}

const generateOtp = ()=>{
    return otpGenerator.generate(6, {digits:true,alphabets:false, upperCase: false, specialChars: false })
}


module.exports = {
    Query:{
        getUsers: async(_,__,{user})=>{
            if(user) return User.findAll()
            },
        getAccessByHospital: async(_,__,{user})=>{
            console.log(user)
               if(user) return await Access.findAll({where:{hospitalId:user.id}})
        },
        getAccessByUser: async(_,__,{user})=>{
               if(user) return await Access.findAll({where:{userId:user.id}})
        },
        getAllRecordByUserId: async(_,{userId},{user})=>{
           if(user) return await Record.findAll(['id','DESC'],{where:{patientId:userId}})
        },
        getAllRecordByUser: async(_,__,{user})=>{
           if(user) return await Record.findAll({where:{patientId:user.id}})
        },
        getUserInfoById: async(_,{id},{user})=>{
            if(user) return User.findOne({where:{id:id}})
        },
        getUserProfile: async(_,__,{user})=>{
            if(user) return User.findOne({where:{id:user.id}})
        },
        getHospitalProfile: async(_,__,{user})=>{
            if(user) return Hospital.findOne({where:{id:user.id}})
        }
    },

    Record:{
        user: async({patientId})=>{
            return await User.findOne({where:{id:patientId}})
        },
        hospital: async({hospitalId})=>{
            return await Hospital.findOne({where:{id:hospitalId}})
        }
    },

    HospitalAccess:{
        user: async({userId})=>{
            return await User.findOne({where:{id:userId}})
        }
    },

    Mutation:{
      createUser: async(_,{input})=>{
          const code = generateOtp()
        const hash = bcrypt.hashSync(input.password, 10)
        const [user,created] =  await User.findOrCreate({
         where:{email:input.email},
         defaults:{name:input.name,phoneNumber:input.phoneNumber,password:hash,code,status:false}
        })
            if(created){
                handleEmail(input.email,`Dear ${input.name}, your account has been created successfully. Visit https://chainmedic-patient.herokuapp.com/verify  and use the following code to activate your account <b>${code}</b>`,
                "ChainMedic | Verify Account")
                return{status:true,message:"User created and an activation code has been sent to your email"}
            }else{
                return{status:false,message:"An account with the email address already exists"}
            }
        },
        login: async(_,{input})=>{

           const user = await  User.findOne({where:{email:input.email}})
           if(!user){
               return{
                   status:false,
                   message:"Invalid Password or Email"
               }
            }else if(!user.status){
                return{
                    status:false,
                    message:"Your account is not yet activated. Use the code we sent to your registered email"
                }
             }else{
            const match = await bcrypt.compare(input.password, user.password)
            if(match){
                const token = jwt.sign({ id:user.id,name:user.name }, 'shhhhh');
                return{
                    status:true,
                    message:"Login Successful",
                    token:token
                }
            }else{
                return{
                    status:false,
                    message:"Invalid Password or Email"
                } 
            }
               
           } 
           
        },
      createHospital: async(_,{input})=>{
        const code = generateOtp()
       
        const user = new BigchainDB.Ed25519Keypair()
        const hash = await bcrypt.hashSync(input.password, 10)
        const [hospital,created] =  await Hospital.findOrCreate({
            where:{email:input.email,name:input.name},
            defaults:{phoneNumber:input.phoneNumber,password:hash,publicKey:user.publicKey,privateKey:user.privateKey,code,status:false}
           })
           if(created){
            handleEmail(input.email,`Dear ${input.name}, your account has been created successfully. Visit https://chainmedic-hos.herokuapp.com/verify and use the following code to activate your account <b>${code}</b>`,
            "ChainMedic | Verify Account")
               return{status:true,message:"Account is created"}
           }else{
               return{status:false,message:"An account with the email address or name already exists"}
           }
      },
      loginHospital: async(_,{input})=>{
        const hospital = await  Hospital.findOne({where:{email:input.email}})
        if(!hospital){
            return{
                status:false,
                message:"Invalid Password or Email"
            }
         }else if(!hospital.status){
            return{
                status:false,
                message:"Your account is not yet activated. Use the code we sent to your registered email"
            }
         }else{
         const match = await bcrypt.compare(input.password, hospital.password)
         if(match){
             const token = jwt.sign({ id:hospital.id,name:hospital.name,pubKey:hospital.publicKey,privKey:hospital.privateKey}, 'shhhhh');
             return{
                 status:true,
                 message:"Login Successful",
                 token:token
             }
         }else{
             return{
                 status:false,
                 message:"Invalid Password or Email"
             } 
         }
            
        }
      },
      createAccess: async(_,{email},{user})=>{
          if(user){
              const u = await Hospital.findOne({where:{email:email}})
              if(u){
                const [access,created] = await Access.findOrCreate({where:{hospitalId:u.id, userId:user.id}})
                
                if(created){
                    handleEmail(email,`A new patient have granted you access to his/her account`,
                        "ChainMedic | Verify Account")
                return{status:true,message:"Access Granted to hospital"}
            }else{
              return{status:false,message:"User already has access"}
            }
        }else{
            return{
                status:false,
                message:"Email is invalid"
            }
        }
        }else{
            return{
                message:"Invalid token",
                status:false
            }
        }
      },
      createRecord: async(_,{input},{user})=>{
      
        if(user){
            const txCreatePaint = BigchainDB.Transaction.makeCreateTransaction({input},{datetime: new Date().toString(),
                location: 'Nigeria'
            },
            
            [BigchainDB.Transaction.makeOutput(
                BigchainDB.Transaction.makeEd25519Condition(user.pubKey))],
                user.pubKey
        )
        // The owner of the painting signs the transaction
        const txSigned = BigchainDB.Transaction.signTransaction(txCreatePaint,
            user.privKey)
        
        // Send the transaction off to BigchainDB
      const r = await conn.postTransactionCommit(txSigned).then(res => res)
            
                if(r){
                      const [record,created] = await Record.findOrCreate({where:{transId:r.id,patientId:input.userId,hospitalId:user.id}})
                      if(created){
                        handleEmail(user.email,`Dear User, a new record have been added to your account on your behalf`,
                        "ChainMedic | Verify Account")
                          return{
                              status:true,
                              message:"Record added"
                          }
                      }
                  }else{
                      return{
                          status:false,
                          message:"Cannot create record"
                      }
                  }
              
        
        }else{
            return{
                status:false,
                message:"Invalid Token"
            }
        }
      },
      updateUser: async(_,{input},{user})=>{
          if(user){
              const [users] = await User.update(input,{where:{id:user.id}})
              if(users){
                  return{
                      status:true,
                      message:"User Info Updated Successfully"
                  }
              }else{
                return{
                    status:false,
                    message:"User does not exist"
                }
              }
          }
      },
      updateHospital: async(_,{input},{user})=>{
          if(user){
              const [users] = await Hospital.update(input,{where:{id:user.id}})
              if(users){
                  return{
                      status:true,
                      message:"Hospital Info Updated Successfully"
                  }
              }else{
                return{
                    status:false,
                    message:"Hospital does not exist"
                }
              }
          }
      },
      verifyUser: async(_,{input})=>{
        const [user] = await User.update({status:1},{where:input})
        if(user){
            return{
                status:true,
                message:"Account Activated"
            }
        }else{
            return{
                status:false,
                message:"Activation failed"
            }
        }
    },
    verifyHospital: async(_,{input})=>{
        const [user] = await Hospital.update({status:1},{where:input})
        if(user){
            return{
                status:true,
                message:"Account Activated"
            }
        }else{
            return{
                status:false,
                message:"Activation Invalid"
            }
        }
    },
    }
}