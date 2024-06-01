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
        <div className='bg-green-200 min-h-[75vh]'>
            {data && (
                <>
                    <h1 className='bg-green-200 font-bold text-2xl flex justify-center p-6'>Driver information</h1>
                    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-4">
                        {data.map((item) => (
                            <div key={item.index} className="w-full sm:w-[30vw] bg-green-200 border border-black p-4 rounded-lg shadow-md">
                                <div className="bg-green-200 p-4">
                                    <p className="font-bold mb-2 underline">Driver Details:</p>
                                    <p><span className="font-bold">Driver Id:</span> {item.id}</p>
                                    <p><span className="font-bold">Driver Email:</span> {item.email}</p>
                                    <p><span className="font-bold">Driver Name:</span> {item.fullName}</p>
                                    <p><span className="font-bold">Contact:</span> {item.contact}</p>
                                    <p><span className="font-bold">Address:</span> {item.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ViewDriver;
