import React, { createContext, useContext } from "react"

const Register = createContext();

export const RegisterProvider = ({children})=>{

    const addAdmin = (adminData)=>{
        console.log(adminData);

    }

    const addDriver = (driverData)=>{
        console.log(driverData);

    }

    const addUser = (userData)=>{
        console.log(userData);
    }

   return <Register.Provider value={{addAdmin, addDriver, addUser}} >{children}</Register.Provider>
}

export const useRegister = ()=> useContext(Register);