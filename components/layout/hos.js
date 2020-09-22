import React, {useEffect} from 'react'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import Cookies from 'js-cookie'
import Link from 'next/link'
import Router from 'next/router'


const Nav = ()=>{
  

    const handleLogout = ()=>{
        localStorage.removeItem("hos_token")
        Router.push('/')
    }

    return(
        <>
        <Head>
            <title>HOS</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </Head>
        <nav className="indigo">
            <div className="nav-wrapper container">
            <a href="#" className="brand-logo">ChainMedic</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link href="/hos/profile"><a><i className="material-icons">person</i></a></Link></li>
                <li onClick={()=>handleLogout()} className="logout"><i className="material-icons">power_settings_new</i></li>
            </ul>
            </div>
        </nav>
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

<style jsx>{`
                .logout{
                    cursor:pointer;
                    
                }    
            `}</style>
        </>
    )
}

export default Nav