import React, { createContext, useContext } from "react"
import axios from 'axios';
import { toast } from "react-toastify";


const Register = createContext();

export const RegisterProvider = ({children})=>{
    const config = {
        headers:{
            'content-type':"application/json"
        }
    }

    const addAdmin = async(adminData) =>{
       try{
        const response = await axios.post('http://localhost:3000/admin/signup', adminData, config);
        if(response){
            toast.success(response.data.message);
        }
      
       }
       catch(error){
        toast.error('failed');
       }


        

    }

    const addDriver = async(driverData)=>{
        console.log(driverData);
        try{
            const response = await axios.post('http://localhost:3000/driver/signup', driverData, config);
            if(response){
                toast.success(response.data.message);
            }
        
           }
           catch(error){
            toast.error('failed');
           }
       

    }

    const addUser = async(userData)=>{


        try{
            const response = await axios.post('http://localhost:3000/user/signup', userData, config);
            if(response){
                toast.success(response.data.message);
            }
           }
           catch(error){
            toast.error('failed');
           }
       
    }

   return <Register.Provider value={{addAdmin, addDriver, addUser}} >{children}</Register.Provider>
}

export const useRegister = ()=> useContext(Register);