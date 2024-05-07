import React, { useState } from 'react'
import Button from '../button/Button'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    binNumber: "",
    locality: "",
    landMark: "",
    village: "",
    driverEmail: "",
    driverName: "",
    loadType: "low",
    cyclePeriod: "daily" 
  });

  const config = {
    headers:{
        'content-type':"application/json"
    }
}

  const handleChange= (e)=>{
    const {name, value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/bin/create", data, config);
    if(response){
      toast.success(response.data.message);
      navigate("/adminHomePage");
    }
    else{
      toast.error("Failed");
    }
    
  }
  return (
    <>
    <div className='w-full h-[100vh] flex justify-center  '>
    <form className="w-[40%] mx-auto bg-slate-400 p-5">
  <div className="mb-4">
    <label htmlFor="binnumber" className="block  text-gray-700 text-sm font-bold mb-1">
      Bin Number
    </label>
    <input
      type="text"
      id="binnumber"
      name="binNumber"
      onChange={(e) => handleChange(e)}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="locality" className="block text-gray-700 text-sm font-bold mb-1">
      Locality
    </label>
    <input
      type="text"
      id="locality"
      name="locality"
      onChange={(e) => handleChange(e)}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="landmark" className="block text-gray-700 text-sm font-bold mb-1">
      Landmark
    </label>
    <input
      type="text"
      id="landmark"
      name="landMark"
      onChange={(e) => handleChange(e)}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="village" className="block text-gray-700 text-sm font-bold mb-1">
      Village
    </label>
    <input
      type="text"
      id="village"
      name="village"
      onChange={(e) => handleChange(e)}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="driveremail" className="block text-gray-700 text-sm font-bold mb-1">
      Driver Email
    </label>
    <input
      type="email"
      id="driveremail"
      name="driverEmail"
      onChange={(e) => handleChange(e)}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="drivername" className="block text-gray-700 text-sm font-bold mb-1">
      Driver Name
    </label>
    <input
      type="text"
      id="drivername"
      name="driverName"
      onChange={(e) => handleChange(e)}
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="loadtype" className="block text-gray-700 text-sm font-bold mb-1">
      Load Type
    </label>
    <select
      id="loadtype"
      name="loadType"
      onChange={(e) => handleChange(e)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="cycleperiod" className="block text-gray-700 text-sm font-bold mb-1">
      Cycle Period
    </label>
    <select
      id="cycleperiod"
      name="cyclePeriod"
      onChange={(e) => handleChange(e)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="daily">Daily</option>
      <option value="twice">Twice</option>
      <option value="weekly">Weekly</option>
    </select>
  </div>

  <div className="flex justify-center">
    <div className="w-24 h-12 " onClick={(e)=> handleSubmit(e)}>
      <Button name="Add Bin" />
    </div>
  </div>
</form>
    </div>

    </>
  )
}

export default CreateBin;
