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
    <div>
      User Home Page
      <ComplaintBox/>
      <p onClick={()=>setMap(true)}>
        click
      {map && <ViewMap marker={markers}/>}
      </p>
    </div>
  )
}

export default UserHomePage
