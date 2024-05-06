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
   <form>
    <div>
      <label htmlFor="binnumber">Bin Number</label>
      <input
        type="text"
        id="binnumber"
        name="binNumber"
        onChange={(e)=> handleChange(e)}
        required
      />
    </div>
    <div>
      <label htmlFor="locality">Locality</label>
      <input
        type="text"
        id="locality"
        name="locality"
        onChange={(e)=> handleChange(e)}
        required
      />
    </div>
    <div>
      <label htmlFor="landmark">Landmark</label>
      <input
        type="text"
        id="landmark"
        name="landMark"

        onChange={(e)=> handleChange(e)}
        required
      />
    </div>
    <div>
      <label htmlFor="village">Village</label>
      <input
        type="text"
        id="village"
        name="village"

        onChange={(e)=> handleChange(e)}
        required
      />
    </div>
    <div>
      <label htmlFor="driveremail">Driver Email</label>
      <input
        type="email"
        id="driveremail"
        name="driverEmail"

        onChange={(e)=> handleChange(e)}
        required
      />
    </div>
    <div>
      <label htmlFor="drivername">Driver Name</label>
      <input
        type="text"
        id="drivername"
        name="driverName"

        onChange={(e)=> handleChange(e)}
        required
      />
    </div>
    <div>
      <label htmlFor="loadtype">Load Type</label>
      <select
        id="loadtype"
        name="loadType"

        onChange={(e)=> handleChange(e)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    <div>
      <label htmlFor="cycleperiod">Cycle Period</label>
      <select
        id="cycleperiod"
        name="cyclePeriod"

        onChange={(e)=> handleChange(e)}
      >
        <option value="daily">Daily</option>
        <option value="twice">Twice</option>
        <option value="weekly">Weekly</option>
      </select>
    </div>

    <div className='w-24 h-12' onClick={(e)=> handleSubmit(e)}>
      <Button name="Add Bin"/>
    </div>
  </form>

    </>
  )
}

export default CreateBin;
