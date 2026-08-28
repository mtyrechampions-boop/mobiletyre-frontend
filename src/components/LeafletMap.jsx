'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet default icon issues in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Component to handle map center updates
const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, 14);
  return null;
};

const LeafletMap = ({ mapCenter, postcode }) => {
  return (
    <MapContainer 
      center={mapCenter} 
      zoom={14} 
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapCenter}>
        <Popup>
          Postcode: {postcode}
        </Popup>
      </Marker>
      <ChangeView center={mapCenter} />
    </MapContainer>
  );
};

export default LeafletMap;
