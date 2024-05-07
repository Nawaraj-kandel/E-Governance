import React, { useState } from 'react'
import Button from '../button/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../context/LoginContext'



const UserForm = () => {
  const {user} = userLogin();
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
    const response = await axios.post("http://localhost:3000/user/login", data, config );

    if(response){
      const email= response.data.data.email;
      const fullname = response.data.data.fullName;
      const address =response.data.data.village;
      toast.success(response.data.message);
      user(email, fullname, address);
      navigate('/userHomePage');
    }
    else{
      toast.error("failed");
    }
  }
  
  return (
    <>
     <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <div className=" w-24 h-12 flex items-center justify-center"  onClick={handleSubmit} >
          <Button name="Login" />
        </div>
      </form>
    </div>
    </>
  )
}

export default UserForm
