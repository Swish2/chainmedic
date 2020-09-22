import React, {createContext,useState} from 'react'
import Router from 'next/router'

export const AuthContext = createContext()

const AuthContextProvider = ()=>{

    const [token,setToken] = useState("")

    const login = (token)=>{
        setToken(token)
        Router.push("/dashboard")
    }

    const logOut = ()=>{
        setToken(null)
        Router.push("/")
    }


    return <AuthContext.Provider value={token, login, logOut} />
    
}

export default AuthContextProvider