import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Map from '../map/Map';
import { toast } from 'react-toastify';

const CreateBin = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState(false);
  const [location, setLocation] = useState([]);
  const [data, setData] = useState({
    binNumber: '',
    locality: '',
    landMark: '',
    village: '',
    driverEmail: '',
    driverName: '',
    loadType: 'low',
    cyclePeriod: 'daily',
    map: location,
  });

  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };

  useEffect(() => {
    setData((prevData) => ({ ...prevData, map: location }));
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:3000/bin/create', data, config);
    if (response) {
      toast.success(response.data.message);
      navigate('/adminHomePage');
    } else {
      toast.error('Failed');
    }
  };

  return (
    <>
      <div className='bg-green-200 w-full h-full flex justify-center pt-6 pb-6'>
        <form className='w-fit md:w-[40%] lg:w-[40%] mx-auto bg-slate-400 p-6 md:p-8 lg:p-10'>
          <div className='mb-4'>
            <label htmlFor='binnumber' className='block text-gray-700 text-sm font-bold mb-1'>
              Bin Number
            </label>
            <input
              type='text'
              id='binnumber'
              name='binNumber'
              onChange={handleChange}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='locality' className='block text-gray-700 text-sm font-bold mb-1'>
              Locality
            </label>
            <input
              type='text'
              id='locality'
              name='locality'
              onChange={handleChange}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='landmark' className='block text-gray-700 text-sm font-bold mb-1'>
              Landmark
            </label>
            <input
              type='text'
              id='landmark'
              name='landMark'
              onChange={handleChange}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='village' className='block text-gray-700 text-sm font-bold mb-1'>
              Village
            </label>
            <input
              type='text'
              id='village'
              name='village'
              onChange={handleChange}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='driveremail' className='block text-gray-700 text-sm font-bold mb-1'>
              Driver Email
            </label>
            <input
              type='email'
              id='driveremail'
              name='driverEmail'
              onChange={handleChange}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='drivername' className='block text-gray-700 text-sm font-bold mb-1'>
              Driver Name
            </label>
            <input
              type='text'
              id='drivername'
              name='driverName'
              onChange={handleChange}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='loadtype' className='block text-gray-700 text-sm font-bold mb-1'>
              Load Type
            </label>
            <select
              id='loadtype'
              name='loadType'
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='cycleperiod' className='block text-gray-700 text-sm font-bold mb-1'>
              Cycle Period
            </label>
            <select
              id='cycleperiod'
              name='cyclePeriod'
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value='daily'>Daily</option>
              <option value='twice'>Twice</option>
              <option value='weekly'>Weekly</option>
            </select>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-1'
              htmlFor='map-button'
            >
              {/* Set Location */}
            </label>
            <button
              id='map-button'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setMap((prev) => !prev)}
            >
              Set Location
            </button>
            {map && <Map setLocation={setLocation} />}
          </div>
          <div className='flex justify-center pt-4'>
            <div className='w-24 h-12' onClick={handleSubmit}>
              <Button name='Add Bin' />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBin;
