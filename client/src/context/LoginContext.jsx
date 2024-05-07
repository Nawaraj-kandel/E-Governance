import React, { createContext, useContext, useState } from "react"


const Login = createContext();

export const LoginProvider = ({children})=>{

    const admin = (val)=>{
        localStorage.setItem("data", val);
    }

    const user = (email, fullname, address)=>{
        localStorage.setItem("email", email);
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('address', address);
    }
    
    const driver = (val)=>{
        localStorage.setItem("data", val);
    }


    return <Login.Provider value={{admin, user, driver}}>{children}</Login.Provider>
   
    }
export const userLogin = ()=> useContext(Login);