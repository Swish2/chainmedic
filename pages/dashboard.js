import React,{useState} from 'react'
import Nav from '../components/layout'
import Link from 'next/link'
import {useQuery,useMutation} from '@apollo/client'
import {GET_ALL_RECORD_BY_USER,CREATE_ACCESS} from '../graphql/schema'
import {Formik,Form,Field} from 'formik'
import {toast} from 'react-toastify'
import {Modal} from '../components/modal'

const Index = ()=>{
    const [isOpen,setIsOpen] = useState(false)
  
   const {data,loading,refetch} =  useQuery(GET_ALL_RECORD_BY_USER)

   const [createAccess] = useMutation(CREATE_ACCESS,{
       onCompleted({createAccess}){
           if(createAccess.status){
                refetch()
               toast.success(createAccess.message)
           }else{
            toast.error(createAccess.message)
           }
       },
       onError(error){

       }
   })


return(
        <>
            <Nav />
            <br /><br />
            <div className="container">
            <h5>Medical Records <button className="btn right indigo" onClick={()=>setIsOpen(true)}>Give Access</button></h5><br />
               {
                   loading ? <p>Loading...</p>:
                   <table className="striped">
                   <thead>
                   <tr><th>#</th><th>Hospital</th><th>Created</th><th>...</th></tr>
                   </thead>
                   <tbody>
                       {
                           data && data.getAllRecordByUser ? data.getAllRecordByUser.map(({transId,hospital,createdAt},i)=>(

                               <tr><td>{1+i}.</td><td>{hospital.name}</td><td>{createdAt}</td><td><Link href="/[tid]" as={`/${transId}`}><a><i className="material-icons">visibility</i></a></Link></td></tr>
                           )):null
                       }
                       </tbody>
               </table>
               }
               
               <Modal title="Give Access" isOpen={isOpen} 
                close={()=>setIsOpen(false)} 
                isLine={true} overflow={true}>
                     <div style={{width:"100%"}}>
                        <div className="row">
                            <div className="col s12 m6 input-field">
                            <Formik
                            initialValues={{email:""}}
                            onSubmit={(input,{setSubmitting,resetForm})=>{
                                createAccess({variables:input}).then(r=>{
                                    if(r.data.createAccess.status){
                                        resetForm()
                                        setIsOpen(false)
                                    }
                                    setSubmitting(false)
                                })

                            }}>{({isSubmitting})=>(
                            <Form>
                                <Field name="email" placeholder="Enter Hospital Email"/>
                                <button className="btn indigo" disabled={isSubmitting}>{isSubmitting ? "Please wait...":"Submit"}</button>
                            </Form>
                            )}
                        </Formik>
                            </div>
                        </div>
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