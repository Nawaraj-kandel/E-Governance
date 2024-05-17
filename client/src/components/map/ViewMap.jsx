
import React from 'react';
import { MapContainer, TileLayer, Marker, useMapEvent, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';



const ViewMap = ({marker}) => {
  
    console.log(marker);
      const customIcon = new Icon({
        iconUrl: "/bin.png",
        iconSize: [24, 24]
      }); 
  return (
    <div className="w-full h-[100vh]">
    <MapContainer center={[27.8771, 82.5727]} zoom={13} className='w-full h-full'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
   
      <MarkerClusterGroup>
        {marker.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  </div>
  )
}

export default ViewMap
