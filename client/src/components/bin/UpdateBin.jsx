import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateBin = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [binData, setBinData] = useState({
        binNumber: '',
        locality: '',
        landMark: '',
        village: '',
        driverEmail: '',
        driverName: '',
        loadType: 'low',
        cyclePeriod: 'daily'
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/bin/${id}`);
                setBinData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBinData({ ...binData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/bin/update/${id}`, binData);
            toast.success("Updated");
            navigate('/bin');

        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        < div className=" bg-green-200">
            
                <h2 className="text-2xl pt-10 font-bold mb-4  text-center">Update Bin Data</h2>
                <form onSubmit={(e)=> handleSubmit(e)} className="space-y-4 w-[40vw] p-4 mx-auto bg-green-200 rounded-md   border border-black">
                    <div>
                        <label htmlFor="binnumber" className="block text-gray-700">Bin Number</label>
                        <input
                            type="text"
                            id="binnumber"
                            name="binNumber"
                            value={binData.binNumber}
                            onChange={(e)=> handleChange(e)}
                            required
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="locality" className="block text-gray-700">Locality</label>
                        <input
                            type="text"
                            id="locality"
                            name="locality"
                            value={binData.locality}
                            onChange={(e)=> handleChange(e)}
                            required
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="landmark" className="block text-gray-700">Landmark</label>
                        <input
                            type="text"
                            id="landmark"
                            name="landMark"
                            value={binData.landMark}
                            onChange={(e)=> handleChange(e)}
                            required
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="village" className="block text-gray-700">Village</label>
                        <input
                            type="text"
                            id="village"
                            name="village"
                            value={binData.village}
                            onChange={(e)=> handleChange(e)}
                            required
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="driveremail" className="block text-gray-700">Driver Email</label>
                        <input
                            type="email"
                            id="driveremail"
                            name="driverEmail"
                            value={binData.driverEmail}
                            onChange={(e)=> handleChange(e)}
                            required
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="drivername" className="block text-gray-700">Driver Name</label>
                        <input
                            type="text"
                            id="drivername"
                            name="driverName"
                            value={binData.driverName}
                            onChange={(e)=> handleChange(e)}
                            required
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="loadtype" className="block text-gray-700">Load Type</label>
                        <select
                            id="loadtype"
                            name="loadType"
                            value={binData.loadType}
                            onChange={(e)=> handleChange(e)}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cycleperiod" className="block text-gray-700">Cycle Period</label>
                        <select
                            id="cycleperiod"
                            name="cyclePeriod"
                            value={binData.cyclePeriod}
                            onChange={(e)=> handleChange(e)}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            <option value="daily">Daily</option>
                            <option value="twice">Twice</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Update Bin</button>
                    </div>
                </form>
        </div>
    );
};

export default UpdateBin;
