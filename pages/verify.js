import React from 'react'
import {Formik,Field,Form} from 'formik'
import Link from 'next/link'
import {useMutation} from '@apollo/client'
import {VERIFY_HOSPITAL} from '../graphql/schema'
import {ToastContainer,toast} from 'react-toastify'
import Router from 'next/router'
import Cookies from 'js-cookie'


const Index = ()=>{


const [verifyHospital] = useMutation(VERIFY_HOSPITAL,{
    onCompleted({verifyHospital}){
       if(verifyHospital.status){
           toast.success(verifyHospital.message)
           Router.push("/hos/")
       }else{
        toast.error(verifyHospital.message)
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
                    <h5>Account verification</h5>
                    <p>Enter the code sent to your email and the email</p>
                    <Formik
                      
                        initialValues={{code:"",email:""}}
                        onSubmit={(input,{setSubmitting})=>{
                            verifyHospital({variables:input}).then(r=>{
                                setSubmitting(false)
                            })
                           
                        }}>{({handleSubmit, isSubmitting})=>(
                        <Form>
                            <Field type="email" placeholder="Enter Email" className="input" name="email"/>
                            <Field type="text" placeholder="Enter Code" className="input" name="code"/>
                        <button className="login-btn" onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? "Please wait":"Verify"}</button>
                        </Form>
                    )}</Formik>
                    <p className="link">Don't have an account ? <Link href="/register"><a>Create account</a></Link></p>
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