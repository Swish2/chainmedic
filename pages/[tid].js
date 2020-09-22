import React,{useState, useEffect} from 'react'
import Nav from '../components/layout'
import Link from 'next/link'
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import axios from 'axios'
  





const Index = ({a})=>{
    const [value,setValue] = useState(null)

 
return(
        <>
            <Nav />
            <br /><br />
            
            <div className="container">
                <h5>Record</h5>
                <ul>
                    <li><b>Blood Pressure:</b><br /> {a.bp}</li><br />
                    <li><b>Diabetics:</b><br /> {a.diabetics}</li><br />
                    <li><b>Smoke:</b><br /> {a.smoke}</li><br />
                    <li><b>Drink:</b><br /> {a.drink}</li><br />
                    <li><b>Admission:</b><br /> {a.admission}</li><br />
                    <li><b>Medication:</b><br /> {a.medication}</li><br />
                    <li><b>Surgery:</b><br /> {a.surgery}</li><br />
                    <li>For Female</li>
                    <li><b>Mode of Child Birth:</b><br /> {a.mode}</li><br />
                    <li><b>Kids:</b><br /> {a.kids}</li>
                </ul>
               
            </div>

        
        </>
    )
}

export async function getServerSideProps({req,res,query}){
    const a = await axios.get(`https://test.ipdb.io/api/v1/assets/?search=${query.tid}`)
    .then(({data})=>{
        if(data.length > 0){
            return data[0].data.input
        }else{
            return []
        }
    })
     return{props:{a}}
 }
export default Index