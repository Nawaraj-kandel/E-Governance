import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const Bin = () => {
    const [data, setData] = useState();
    useEffect(()=>{
      const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/bin");
            const data = response.data;
            setData(data.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
    }, []);

    console.log(data);
  return (
    <>
     {
        data && (
            <>
            <h2 className="text-lg font-bold mb-2">Bin Data</h2>
             {
              data.map((item)=>{
                return(
                  <div key={item.index} className="border border-gray-400 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <p><span className="font-bold">Bin Number:</span> {item.binNumber}</p>
                          <p><span className="font-bold">Cycle Period:</span> {item.cyclePeriod}</p>
                          <p><span className="font-bold">Driver Email:</span> {item.driverEmail}</p>
                          <p><span className="font-bold">Driver Name:</span> {item.driverName}</p>
                      </div>
                      <div>
                          <p><span className="font-bold">ID:</span> {item.id}</p>
                          <p><span className="font-bold">Landmark:</span> {item.landMark}</p>
                          <p><span className="font-bold">Load Type:</span> {item.loadType}</p>
                          <p><span className="font-bold">Locality:</span> {item.locality}</p>
                          <p><span className="font-bold">Village:</span> {item.village}</p>

                      </div>
                     <Link to={`/updateBin/${item.id}`}>
                     <Button name="update"/>
                      </Link>
                  </div>
                
              </div>
                )
              })
             }          
            </>
        )
     } 
    </>
  )
}

export default Bin