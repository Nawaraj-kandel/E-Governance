import React, { useState } from 'react'
import Button from '../button/Button'
import { useRegister } from '../../context/RegisterContext';

const AdminRegister = () => {
  const {addAdmin} = useRegister();
  const [data, setData] = useState({
    name:"",
    address:"",
    email:"",
    password:""
  });
  const [emailError, setEmailError] = useState(false);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    
    if(name === 'email'){
      const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?admin\.com$/;
      setEmailError(!pattern.test(value));
    }

    setData({
      ...data,
      [name] : value
    })
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    addAdmin(data);
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-green-200">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name of the Organization
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={data.address}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailError ? 'border-red-500' : ''
              }`}
            />
            {emailError && <p className="text-red-500 text-xs italic">Invalid email, add @admin.com</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full sm:w-40 flex justify-center" onClick={(e)=>handleSubmit(e)}>
            <Button name="Submit" />
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminRegister
