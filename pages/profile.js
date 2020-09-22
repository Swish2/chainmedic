import React,{useState,useEffect} from 'react'
import Nav from '../components/layout'
import Link from 'next/link'
import {useQuery,useMutation} from '@apollo/client'
import {GET_HOSPITAL_PROFILE,UPDATE_HOSPITAL} from '../graphql/schema'
import {Formik,Form,Field} from 'formik'
import {toast} from 'react-toastify'
import {Modal} from '../components/modal'
const M = typeof window !=="undefined" ? require("materialize-css"):''


const Index = ()=>{
    const [isOpen,setIsOpen] = useState(false)
  
   const {data,loading,refetch} =  useQuery(GET_HOSPITAL_PROFILE)

    const [updateHospital]= useMutation(UPDATE_HOSPITAL,{
        onCompleted({updateHospital}){
            if(updateHospital.status){
                refetch()
                toast.success(updateHospital.message)
            }else{
                toast.error(updateHospital.message)
            }
        },
        onError(errors){

        },
        errorPolicy:"ignore"
    })

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + '-' + month + '-' + year
        return time;
      }
      console.log(timeConverter(0));

   useEffect(() => {
    M.AutoInit()
   }, [])

return(
        <>
            <Nav />
            <br /><br />
            <div className="container">
            <h5>Profile <button className="btn right indigo" onClick={()=>setIsOpen(true)}>Update Profile</button></h5><br />
           { loading ? <p>Loading...</p>:
            <ul>
                    <li><b>Name:</b><br />{data && data.getHospitalProfile.name}</li><br />
                    <li><b>Email:</b><br />{data && data.getHospitalProfile.email}</li><br />
                    <li><b>Phone Number:</b><br />{data && data.getHospitalProfile.phoneNumber}</li><br />
                    <li><b>Address:</b><br />{data && data.getHospitalProfile.address}</li><br />
                    <li><b>Registration Number:</b><br />{data && data.getHospitalProfile.regNumber}</li><br />
                    <li><b>Private Key:</b><br />{data && data.getHospitalProfile.privateKey}</li><br />
                    <li><b>Public Key:</b><br />{data && data.getHospitalProfile.publicKey}</li><br />
                    
                </ul>
               }
               <Modal title="Update Profile" isOpen={isOpen} 
                close={()=>setIsOpen(false)} 
                isLine={true} overflow={true}>
                     <div style={{width:"100%"}}>
                     <Formik
                            enableReinitialize={true}
                            initialValues={{name:data && data.getHospitalProfile.name,phoneNumber:data && data.getHospitalProfile.phoneNumber,address:data && data.getHospitalProfile.address,regNumber:data && data.getHospitalProfile.regNumber}}
                            onSubmit={(input,{setSubmitting,resetForm})=>{
                                updateHospital({variables:input}).then(r=>{
                                    if(r.data.updateHospital.status){
                                        resetForm()
                                        setIsOpen(false)
                                    }
                                    setSubmitting(false)
                                })

                            }}>{({values,isSubmitting,setFieldValue})=>(
                            <Form>
                                <div className="row">
                                    <div className="col s12 m6 input-field">
                                        <Field type="text" name="name"/>
                                        <label htmlFor="name">Name</label>
                                    </div>

                                    <div className="col s12 m6 input-field">
                                        <Field type="tel" name="phoneNumber"/>
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                    </div>

                                    <div className="col s12 m6 input-field">
                                        <Field type="text" name="address"/>
                                        <label htmlFor="address">Address</label>
                                    </div>
                                    <div className="col s12 m6 input-field">
                                        <Field type="text" name="regNumber"/>
                                        <label htmlFor="regNumber">Registration Number</label>
                                    </div>
                
                                    <div className="col s12 m6 input-field">
                                    <button className="btn indigo" disabled={isSubmitting}>{isSubmitting ? "Please wait...":"Submit"}</button>
                            
                                    </div>
                                </div>
                                
                              </Form>
                            )}
                        </Formik>
                    </div>
                </Modal>
            </div>

             <style jsx>{`
                .input-field{
                    margin-left:40px !important;
                }    
            `}</style>
        </>
    )
}

export default Index