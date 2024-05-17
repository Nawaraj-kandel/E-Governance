import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvent, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import axios from 'axios';

const Map = ({ setLocation }) => {
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

  const customIcon = new Icon({
    iconUrl: "/bin.png",
    iconSize: [24, 24]
  });

  const AddMarkerOnClick = () => {
    useMapEvent('click', (e) => {
      const { lat, lng } = e.latlng;
      const message = prompt("Enter a message for the new marker:");
      if (message) {
        const newMarker = { geocode: [lat, lng], popup: message };
        setMarkers(prevMarkers => [...prevMarkers, newMarker]);
        setLocation([newMarker]);
      }
    });
    return null;
  };

  return (
    <div className="w-full h-[100vh]">
      <MapContainer center={[27.8771, 82.5727]} zoom={13} className='w-full h-full'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarkerOnClick />
        <MarkerClusterGroup>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
