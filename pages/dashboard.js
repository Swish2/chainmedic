import React,{useState} from 'react'
import Nav from '../components/layout/hos'
import Link from 'next/link'
import {useQuery, useLazyQuery} from '@apollo/client'
import {GET_ACCESS_BY_HOSPITAL,GET_USER_INFO_BY_ID} from '../graphql/schema'
import {Modal} from '../components/modal'



const Dashboard = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const {data,loading} = useQuery(GET_ACCESS_BY_HOSPITAL)

    const [getUserInfoById, {data:userInfo, loading:loadingInfo}] = useLazyQuery(GET_USER_INFO_BY_ID)


        const handleUser = (id)=>{
            getUserInfoById({variables:{id:id}})
            setIsOpen(true)
        }



    return(
        <>
            <Nav />
            <br /><br />
            
            <div className="container">
            <h5>Patient list</h5>
            {
                loading ? <p>Loading...</p>:
                <table className="striped">
                    <thead>
                    <tr><th>#</th><th>Customer Name</th><th>Email</th><th>Phone Number</th><th>...</th></tr>
                    </thead>
                    <tbody>
                        {
                            data && data.getAccessByHospital ? data.getAccessByHospital.map(({id,createdAt,user},i)=>(
                                <tr key={i}><td>{1+i}.</td><td className="user" onClick={()=>handleUser(user.id)}>{user.name}</td><td>{user.email}</td><td>{user.phoneNumber}</td><td><Link as={`/record/${user.id}_${user.name.replace(/\s+/g, '-').toLowerCase()}`} href="/record/[id]"><a><i className="material-icons">visibility</i></a></Link></td></tr>
                            )):null
                        }
                      
                        </tbody>
                </table>
            }
                 <Modal title="User Profile" isOpen={isOpen} 
                close={()=>setIsOpen(false)} 
                isLine={true} overflow={true}
                width={30}>
                    <div style={{width:"100%", paddingLeft:"30px"}}>
                    <div className="row">
                        <div className="col s12">
                        {
                            loadingInfo ? "loading..." :
                            <>
                                <p><b>Name:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.name:''}</p>
                                <p><b>Email:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.email:''}</p>
                                <p><b>Phone:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.phoneNumber:''}</p>
                                <p><b>Address:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.address:''}</p>
                                <p><b>Date of Birth:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.dateOfBirth:''}</p>
                                <p><b>Gender:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.gender:''}</p>
                                <p><b>Marital Status:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.maritalStatus:''}</p>
                                <p><b>Genotype:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.genotype:''}</p>
                                <p><b>Blood Group:</b><br />{userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.bloodGroup:''}</p>
                            </>
                        }
                        </div>
                    </div>
                    </div>
                </Modal>
            </div>

            <style jsx>{`
                .user{
                    text-decoration:underline;
                }
                
            `}</style>
        </>
    )
}

export default Dashboard