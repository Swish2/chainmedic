import React from 'react'
import {Formik,Field,Form} from 'formik'
import Link from 'next/link'
import {useMutation} from '@apollo/client'
import {CREATE_HOSPITAL} from '../graphql/schema'
import {ToastContainer,toast} from 'react-toastify'
import Router from 'next/router'

const Index = ()=>{


const [createHospital] = useMutation(CREATE_HOSPITAL,{
    onCompleted({createHospital}){
       if(createHospital.status){
           toast.success(createHospital.message)
            Router.push("/verify")
       }else{
        toast.error(createHospital.message)
       }
    },
    onError(error){
        console.log(error)
    }
})
    

    return(
        <>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        <div className="wrapper">
            <div className="white-bg">
                <div className="form-wrapper">
                    <h5>Partner Register</h5>
                    <Formik
                      
                        initialValues={{email:"",password:"", phoneNumber:"",address:"",name:""}}
                        onSubmit={(input,{setSubmitting, resetForm})=>{
                            createHospital({variables:input}).then(r=>{
                                if(r.data.createHospital.status){
                                    resetForm()
                                }
                                setSubmitting(false)
                            })
                           
                        }}>{({handleSubmit, isSubmitting})=>(
                        <Form>
                            <Field type="text" placeholder="Hospital Name" className="input" name="name"/>
                            <Field type="tel" placeholder="Phone Number" className="input" name="phoneNumber"/>
                            <Field type="email" placeholder="Email address" className="input" name="email"/>
                            <Field type="text" placeholder="Address" className="input" name="address"/>
                            <Field type="password" placeholder="Password" className="input"  name="password"/>
                        <button className="login-btn" onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? "Please wait":"Register"}</button>
                        </Form>
                    )}</Formik>
                    <p className="link">Have an account ? <Link href="/"><a>Login</a></Link></p>
                </div>
            </div>

        </div>
        <style jsx>{`
            .wrapper{
                height:100%;
                display:flex; 
                flex-direction:column;
                align-items:center;
                justify-content:center;
            }

            .white-bg{
                height:400px;
                width:400px;
                background:#ffffff;
                border-radius:4px;
                display:flex;
                align-items:center;
                justify-content:center;
            }

            .form-wrapper{
                height:65%;
                width:70%;

            }

            .form-wrapper input{
                display:block;
                outline:none;
                border:none;
                background-color:#F7F7F7;
                height:50px;
                padding: 0 10px;
                width:100%;
                margin-top:20px;
                color:#222222;
            }

            .login-btn{
                width:100%;
                outline:none;
                border:none;
                height:40px;
                margin-top:20px;
                background:#0277bd;
                color:white;
                cursor:pointer;
            }

            h3{
                color:#a5d6a7
            }
        `}</style>
        </>
    )
}

export default Index