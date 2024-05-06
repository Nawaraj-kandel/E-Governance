import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateBin = () => {
    const {id} = useParams();
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
        console.log(binData);
        try {
            await axios.patch(`http://localhost:3000/bin/update/${id}`, binData);
            alert("uploaded");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="border border-gray-400 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">Update Bin Data</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="binnumber">Bin Number</label>
                        <input
                            type="text"
                            id="binnumber"
                            name="binNumber"
                            value={binData.binNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="locality">Locality</label>
                        <input
                            type="text"
                            id="locality"
                            name="locality"
                            value={binData.locality}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="landmark">Landmark</label>
                        <input
                            type="text"
                            id="landmark"
                            name="landMark"
                            value={binData.landMark}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="village">Village</label>
                        <input
                            type="text"
                            id="village"
                            name="village"
                            value={binData.village}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="driveremail">Driver Email</label>
                        <input
                            type="email"
                            id="driveremail"
                            name="driverEmail"
                            value={binData.driverEmail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="drivername">Driver Name</label>
                        <input
                            type="text"
                            id="drivername"
                            name="driverName"
                            value={binData.driverName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="loadtype">Load Type</label>
                        <select
                            id="loadtype"
                            name="loadType"
                            value={binData.loadType}
                            onChange={handleChange}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cycleperiod">Cycle Period</label>
                        <select
                            id="cycleperiod"
                            name="cyclePeriod"
                            value={binData.cyclePeriod}
                            onChange={handleChange}
                        >
                            <option value="daily">Daily</option>
                            <option value="twice">Twice</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </div>
                    <div className='w-24 h-12'>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Bin</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBin;
