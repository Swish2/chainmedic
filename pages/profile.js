import React,{useState,useEffect} from 'react'
import Nav from '../components/layout'
import Link from 'next/link'
import {useQuery,useMutation} from '@apollo/client'
import {GET_USER_INFO,UPDATE_USER} from '../graphql/schema'
import {Formik,Form,Field} from 'formik'
import {toast} from 'react-toastify'
import {Modal} from '../components/modal'
const M = typeof window !=="undefined" ? require("materialize-css"):''


const Index = ()=>{
    const [isOpen,setIsOpen] = useState(false)
  
   const {data,loading,refetch} =  useQuery(GET_USER_INFO)
    const [updateUser]= useMutation(UPDATE_USER,{
        onCompleted({updateUser}){
            if(updateUser.status){
                refetch()
                toast.success(updateUser.message)
            }else{
                toast.error(updateUser.message)
            }
        },
        onError(errors){

        }
    })

    console.log(data)

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
                    <li><b>Name:</b><br />{data && data.getUserProfile && data.getUserProfile.name}</li><br />
                    <li><b>Email:</b><br />{data && data.getUserProfile && data.getUserProfile.email}</li><br />
                    <li><b>Phone Number:</b><br />{data && data.getUserProfile && data.getUserProfile.phoneNumber}</li><br />
                    <li><b>Date of Birth:</b><br />{data && data.getUserProfile && data.getUserProfile.dateOfBirth}</li><br />
                    <li><b>Gender:</b><br />{data && data.getUserProfile && data.getUserProfile.gender}</li><br />
                    <li><b>Marital Status:</b><br />{data && data.getUserProfile && data.getUserProfile.maritalStatus}</li><br />
                    <li><b>Address:</b><br />{data && data.getUserProfile && data.getUserProfile.address}</li><br />
                    <li><b>Blood Group:</b><br />{data && data.getUserProfile && data.getUserProfile.bloodGroup}</li><br />
                    <li><b>Genotype:</b><br />{data && data.getUserProfile && data.getUserProfile.genotype}</li><br />
                    
                </ul>
               }
               <Modal title="Update Profile" isOpen={isOpen} 
                close={()=>setIsOpen(false)} 
                isLine={true} overflow={true}>
                     <div style={{width:"100%"}}>
                     <Formik
                            enableReinitialize={true}
                            initialValues={{name: data && data.getUserProfile && data.getUserProfile.name, address: data && data.getUserProfile && data.getUserProfile.address, phoneNumber: data && data.getUserProfile && data.getUserProfile.phoneNumber,
                            gender: data && data.getUserProfile && data.getUserProfile.gender,dateOfBirth: data && data.getUserProfile && data.getUserProfile.dateOfBirth, dateOfBirth: data && data.getUserProfile && data.getUserProfile.dateOfBirth,
                            bloodGroup: data && data.getUserProfile && data.getUserProfile.bloodGroup,genotype: data && data.getUserProfile && data.getUserProfile.genotype, maritalStatus: data && data.getUserProfile && data.getUserProfile.maritalStatus}}
                            onSubmit={(input,{setSubmitting,resetForm})=>{
                                updateUser({variables:input}).then(r=>{
                                    if(r.data.updateUser.status){
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
                                        <Field as="select" name="gender">
                                            <option value="" className="disabled">Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Field>
                                    </div>
                                    <div className="col s12 m6 input-field">
                                        <Field as="select" name="maritalStatus">
                                            <option value="" className="disabled">Marital Status</option>
                                            <option value="married">Married</option>
                                            <option value="single">Single</option>
                                        </Field>
                                    </div>
                                    <div className="col s12 m6 input-field">
                                        <Field type="text" name="dateOfBirth"/>
                                        <label htmlFor="dateOfBirth">Date of Birth</label>
                                    </div>
                                    
                                    <div className="col s12 m6 input-field">
                                        <Field type="text" name="bloodGroup"/>
                                        <label htmlFor="bloodGroup">Blood Group</label>
                                    </div>

                                    <div className="col s12 m6 input-field">
                                        <Field type="text" name="genotype" require/>
                                        <label htmlFor="genotype">Genotype</label>
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