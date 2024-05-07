import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = () => {
    const [complaints, setComplaints] = useState([]);

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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Complaints</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {complaints.map((complaint, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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

export default Display
