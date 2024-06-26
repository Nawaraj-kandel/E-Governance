import React, { useState } from 'react';
import Button from '../button/Button';
import axios from 'axios';
import { toast } from 'react-toastify'


const ComplaintBox = () => {
    const user = localStorage.getItem('email');
    const fullName = localStorage.getItem('fullname');
    const address = localStorage.getItem('address');
    const [complaint, setComplaint] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3000/complaint/create", { user, fullName, address, complaint });
            if(!response){
                toast.error("Record is not success");
            }

            toast.success("Record saved");
            setComplaint('');
        } catch (error) {
            console.error("There was an error submitting the complaint!", error);
        }
    }

    return (
        <div className=" flex flex-col h-[75vh] justify-center items-center ">
            <h1 className="text-2xl font-bold mb-4">Enter your Complaint here:</h1>
            <textarea
                className="w-full  max-w-lg px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none p-"
                onChange={(e) => setComplaint(e.target.value)}
                value={complaint}
                rows="6"
                placeholder="Write your complaint here..."
            ></textarea>
            <div className="w-full max-w-lg flex justify-center">
                <div className="w-24 h-12 m-4" onClick={(e)=> handleSubmit(e)}>
                    <Button name="Submit " />
                </div>
            </div>
        </div>
    )
}

export default ComplaintBox;

