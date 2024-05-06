import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewDriver = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        const fetchData = async()=>{
            var response = await axios.get("http://localhost:3000/driver");
            console.log(response);
        }
    })
  return (
    <div>
         {
              data.map((item)=>{
                return(
                  <div key={item.index} className="border border-gray-400 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <p><span className="font-bold">Driver Id:</span> {item.id}</p>
                          <p><span className="font-bold">Driver Email:</span> {item.driverEmail}</p>
                          <p><span className="font-bold">Driver Name:</span> {item.driverName}</p>
                          <p><span className="font-bold">Contact:</span> {item.driverName}</p>
                          <p><span className="font-bold">Address:</span> {item.driverName}</p>
                      </div>
                   
                  </div>
                
              </div>
                )
              })
             } 
    </div>
  )
}

export default ViewDriver
