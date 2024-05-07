import React, { useState } from 'react'
import Button from '../button/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../context/LoginContext'



const DriverForm = () => {
   const {driver} = userLogin();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email:"",
    password:"",
  })
  const config = {
    headers:{
        'content-type':"application/json"
    }
}

  const handleChange = (e)=>{
    const {name, value} = e.target;
     setData({
      ...data,
      [name]: value
     })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/driver/login", data, config );
    if(response){
      toast.success(response.data.message);
      driver(response.data.check_email.email);
      navigate('/driverHomePage');
    }
    else{
      toast.error("failed");
    }
  }
  
  return (
    <>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' onChange={(e)=> handleChange(e)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' onChange={(e)=> handleChange(e)}/>
        
        </div>
        <div className='w-24 h-12' onClick={(e)=> handleSubmit(e)}>
          <Button name="Login"/>
        </div>
      </form>
    </>
  )
}

export default DriverForm
