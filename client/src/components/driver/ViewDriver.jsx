import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewDriver = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        const fetchData = async()=>{
            var response = await axios.get("http://localhost:3000/driver");
            setData(response.data.data);
        }

        fetchData();
    }, []);
  return (
    <>
     {data && (
        <>
        <h1>Driver information</h1>
         {
              data.map((item)=>{
                return(
                  <div key={item.index} className="border border-gray-400 p-4 rounded-lg shadow-md">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <p className="font-bold mb-2">Driver Details:</p>
                      <p><span className="font-bold">Driver Id:</span> {item.id}</p>
                      <p><span className="font-bold">Driver Email:</span> {item.email}</p>
                      <p><span className="font-bold">Driver Name:</span> {item.fullName}</p>
                      <p><span className="font-bold">Contact:</span> {item.contact}</p>
                      <p><span className="font-bold">Address:</span> {item.address}</p>
                    </div>
                  </div>
                </div>
                )
              })
             } 
        </>
     )}   
    </>
  )
}

export default ViewDriver
