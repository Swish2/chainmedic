import React,{useState,useEffect} from 'react'
import Nav from '../../components/layout/hos'
import Link from 'next/link'
import {Modal} from '../../components/modal'
import {useQuery,useMutation} from '@apollo/client'
import {GET_ALL_RECORD_BY_USER_ID,CREATE_RECORD} from '../../graphql/schema'
import {useRouter} from 'next/router'
import {Formik,Form,Field} from 'formik'
import {toast} from 'react-toastify'
const M = typeof window !=="undefined" ? require("materialize-css"):''



const Index = ()=>{
    const [isOpen,setIsOpen] = useState(false)
    const {query} = useRouter()

    const id = query.id.split("_")

    
   const {data,loading,refetch} =  useQuery(GET_ALL_RECORD_BY_USER_ID,{variables:{userId:parseInt(id[0])}})

   const [createRecord] = useMutation(CREATE_RECORD,{
       onCompleted({createRecord}){
        if(createRecord.status){
            refetch()
            toast.success(createRecord.message)
        }else{
            toast.error(createRecord.message)
        }
       },
       onError(errors){
        console.log(errors)
       }
   })

   const transDate = (str)=>{

const date = new Date(str)
console.log(date)

return date.getDate(str)+'-'+date.getMonth()+'-'+date.getFullYear()
   }

   useEffect(()=>{
       M.AutoInit()
   })

return(
        <>
            <Nav />
            <br /><br />
            
            <div className="container">
                <Link href="/dashboard"><a className="btn blue">Patient Lists</a></Link>
            <h5>{id[1].replace("-"," ").toUpperCase()}'s Medical Records <button className="btn right indigo" onClick={()=>setIsOpen(true)}>Add Record</button></h5><br />
               {
                   loading ? <p>Loading...</p>:
                   <table className="striped">
                   <thead>
                   <tr><th>#</th><th>Hospital</th><th>Phone</th><th>Address</th><th>Created</th><th>...</th></tr>
                   </thead>
                   <tbody>
                       {
                           data ? data.getAllRecordByUserId.map(({transId,hospital,createdAt},i)=>(

                           <tr><td>{1+i}.</td><td>{hospital.name}</td><td>{hospital.phoneNumber}</td><td>{hospital.address}</td><td>{createdAt}</td><td><Link href="/info/[tid]" as={`/info/${transId}`}><a><i className="material-icons">visibility</i></a></Link></td></tr>
                           )):null
                       }
                       </tbody>
               </table>
               }
               
            </div>

            <Modal title="Create Record" isOpen={isOpen} 
                close={()=>setIsOpen(false)} 
                isLine={true} overflow={true}>
                    <Formik
                        enableReinitialize={true}
                        initialValues={{diagnosis:"",hypertensive:'', ulcer:"", bp:'',diabetics:'',allergies:'',smoke:'',drink:'',surgery:'',allergies:'',admission:'',medication:'',
                        kids:0,mode:"", userId:parseInt(id[0])}}
                        onSubmit={(input,{setSubmitting,resetForm})=>{
                            createRecord({variables:input}).then((res)=>{
                                if(res.data.createRecord.status){
                                    resetForm()
                                    setIsOpen(false)
                                }
                              
                                setSubmitting(false)
                            })
                        }}>
                            {({handleSubmit,isSubmitting,values})=>(
                        <Form>
                            <div style={{width:"100%"}}>
                        <div className="row">
                            <div className="col s12 m6 input-field">
                                <Field type="text" name="bp"/>
                                <label htmlFor="bp">Blood Pressure</label>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field type="text" name="diabetics"/>
                                <label htmlFor="diabetics">Diabetics History</label>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field type="text" name="allergies"/>
                                <label htmlFor="allergies">Drug Allergies</label>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field as="select" name="ulcer">
                                    <option value="" disabled selected>Do you have Ulcer ?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Field>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field as="select" name="hypertensive">
                                    <option value="" disabled selected>Are you hypertensive ?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Field>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field as="select" name="smoke">
                                    <option value="" disabled selected>Do you smoke ?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Field>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field as="select" name="drink">
                                    <option value="" disabled selected>Do you Drink ?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Occasionally">Occasionally</option>
                                </Field>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field type="text" name="surgery"/>
                                <label htmlFor="surgery">Surgery History</label>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field type="text" name="admission"/>
                                <label htmlFor="admission">Admission History</label>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field type="text" name="medication"/>
                                <label htmlFor="medication">Current Medication</label>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field type="text" name="diagnosis"/>
                                <label htmlFor="diagnosis">Current Diagnosis</label>
                                </div>
                                <div className="col s12 m6" style={{paddingLeft:"50px", fontWeight:"600"}}>
                                <p>For Female Patients</p>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field type="number" name="kids"/>
                                <label htmlFor="kids">Number of kids</label>
                                </div>
                                <div className="col s12 m6 input-field">
                                <Field as="select" name="mode" defaultValue=" ">
                                    <option value="" disabled selected>Mode of Child Birth</option>
                                    <option value="CS">CS</option>
                                    <option value="Normal">Normal</option>
                                </Field>
                                <br /><br />
                                <button className="btn indigo btn-medium" disabled={isSubmitting}  onClick={handleSubmit}>{isSubmitting ? "Please wait...":"Submit"}</button>
                            </div>
                        </div>
                    </div>
                        </Form>
                    )}</Formik> 
            </Modal>
            <style jsx>{`
                .input-field{
                    margin-left:40px !important;
                }    
            `}</style>
        </>
    )
}

export default Index