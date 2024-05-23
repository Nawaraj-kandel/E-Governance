import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Bin = () => {
    const [data, setData] = useState();
    useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const response = await axios.get("http://localhost:3000/bin");
          setData(response.data.data);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  const handleDelete = async (id) => {
      try {
          const response = await axios.delete(`http://localhost:3000/bin/delete/${id}`);
          const responseData = response.data;
          if (responseData) {
              toast.success(responseData.message);
              fetchData();
          } else {
              toast.error("Error occurred while deleting.");
          }
      } catch (error) {
          console.error("Error occurred while deleting:", error);
          toast.error("Error occurred while deleting.");
      }
  };

  console.log(data);
  return (
    <>
    
     {
        data && (
            <>
            <h2 className=" bg-green-200 text-lg font-bold p-4 flex justify-center ">Bin Data</h2>
             {
              data.map((item)=>{
                return(
                  <div key={item.index} className="border border-gray-400 p-4 rounded-lg bg-green-200">
                  <div className=" bg-white grid grid-cols-2 gap-4 p-6">
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
                          {item.status && <p><span className="font-bold">Status:</span> {item.status}</p>}

                      </div>
                     <Link to={`/updateBin/${item.id}`}>
                     <Button name="update"/>
                      </Link>
                     <button className='w-24 h-12 bg-red-400 rounded-lg'  onClick={()=> handleDelete(item.id)}>Delete</button>
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
