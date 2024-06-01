
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Display = () => {
    const [complaints, setComplaints] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/complaint')
            .then(response => {
                setComplaints(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching complaints:', error);
            });
    }, []);

    return (
        <div className="bg-green-200 h-[75vh] p-6">

            <h1 className="text-3xl font-bold mb-8 text-center">Complaints</h1>
            
            {complaints.length == 0 && 
                <div>
                    <p className='text-center font-bold text-blue-600'>There is no any complaints</p>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {complaints.map((complaint, index) => (
                    <div key={index} className="bg-green-200 border border-black p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{complaint.user}</h2>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">Name:</span> {complaint.name}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">Address:</span> {complaint.address}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">Complaint:</span> {complaint.complaint}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Display;
