import React, { useState } from 'react'
import Button from '../button/Button';
import axios from 'axios';

const ComplaintBox = () => {
    const user = localStorage.getItem('email');
    const fullName = localStorage.getItem('fullname');
    const address = localStorage.getItem('address');
    const [complaint, setComplaint] = useState('');
    const handleSubmit=async()=>{
        const response = await axios.post("http://localhost:3000/complaint/create", {user, fullName, address, complaint});
        console.log(response);
    }
  return (
    <div>
        <h1>hello</h1>
        <div className="relative">
      <textarea
        className="w-1/2 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
        onChange={(e)=> setComplaint(e.target.value)}
      ></textarea>
    <div className='w-24 h-12' onClick={handleSubmit}>
        <Button name="submit"/>
    </div>
    </div>
    </div>
  )
}

export default ComplaintBox
