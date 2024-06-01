import React, { useState, useEffect } from 'react'
import ComplaintBox from '../complaint/ComplaintBox'
import axios from 'axios'
import ViewMap from '../map/ViewMap'

const UserHomePage = () => {
  const [map, setMap] = useState(false);

  const [data, setData] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/bin");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const initialMarkers = data.map(item => ({
        geocode: item.location[0].geocode,
        popup: item.binNumber 
      }));
      setMarkers(initialMarkers);
    }
  }, [data]);

  return (
    <div className='font-bold  bg-green-200 '>
      <ComplaintBox/>
      <p className=' cursor-pointer p-4' onClick={() => setMap(!map)}>
        Click here to {map ? 'hide' : 'view'} the availability of dustbins
      </p>
     <div className='p-10 rounded-3xl'>
     {map && <ViewMap marker={markers}/>}
     </div>
    </div>
  )
}

export default UserHomePage




// import React, { useState, useEffect } from 'react';
// import ComplaintBox from '../complaint/ComplaintBox';
// import axios from 'axios';
// import ViewMap from '../map/ViewMap';

// const UserHomePage = () => {
//   const [map, setMap] = useState(false);
//   const [data, setData] = useState([]);
//   const [markers, setMarkers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     address: '',
//     complaint: ''
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/bin");
//         setData(response.data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (data.length > 0) {
//       const initialMarkers = data.map(item => ({
//         geocode: item.location[0].geocode,
//         popup: item.binNumber
//       }));
//       setMarkers(initialMarkers);
//     }
//   }, [data]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen bg-green-100 p-6">
//       <div className="container mx-auto">
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h1 className="text-3xl font-bold text-center mb-6 text-green-700">User Home Page</h1>

//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="number">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="number"
//                   value={formData.number}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mt-6">
//               <ComplaintBox
//                 value={formData.complaint}
//                 onChange={(e) => handleInputChange({ target: { name: 'complaint', value: e.target.value } })}
//               />
//             </div>

//             <div className="mt-6 text-center">
//               {/* <button
//                 type="submit"
//                 className="bg-green-500 text-white px-6 py-2 rounded-md font-bold hover:bg-green-600"
//               >
//                 Submit
//               </button> */}
//             </div>
//           </form>

//           <div className="text-center mt-8">
//             <p
//               className="text-blue-500 cursor-pointer underline"
//               onClick={() => setMap(prevMap => !prevMap)}
//             >
//               Click here to view the availability of dustbin
//             </p>
//           </div>

//           {map && (
//             <div className="mt-8">
//               <ViewMap marker={markers} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHomePage;
