import React, { useState } from 'react'
import Button from '../button/Button'
import { useRegister } from '../../context/RegisterContext'

const UserRegister = () => {
  const {addUser} = useRegister();
  const [data, setData] = useState({
    fullName:"",
    localGoverment:"",
    wardNo:"",
    village:"",
    tollName : "",
    email:"",
    password :""
  })
  const [emailError, setEmailError] = useState(false);
  const handleChange = (e)=>{
    const {name, value} = e.target;
    
    if(name === 'email'){
      const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?user\.com$/;
      if (!pattern.test(value)) {
        setEmailError(true);
      }
      else{
        setEmailError(false);
      }
    }

    setData({
      ...data,
      [name] : value
    })
 
  };

  const handleSubmit = (e)=>{
        e.preventDefault();
        addUser(data);
  }
  return (
    <>
         <div className=" bg-green-200 min-h-screen flex p-10 justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            name="fullName"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Enter your local government name
          </label>
          <input
            type="text"
            id="address"
            name="localGoverment"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ward" className="block text-gray-700 text-sm font-bold mb-2">
            Ward No.
          </label>
          <input
            type="text"
            id="ward"
            name="wardNo"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="village" className="block text-gray-700 text-sm font-bold mb-2">
            Village
          </label>
          <input
            type="text"
            id="village"
            name="village"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tollName" className="block text-gray-700 text-sm font-bold mb-2">
            Toll Name
          </label>
          <input
            type="text"
            id="tollName"
            name="tollName"
            onChange={handleChange}
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
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              emailError ? 'border-red-500' : ''
            }`}
          />
          {emailError && <p className="text-red-500 text-xs italic">Invalid email, add @user.com</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center">
          <Button name="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
    </>
  )
}

export default UserRegister
