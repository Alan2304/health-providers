import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import MarkersList from './MarkersList';

import './Map.scss';

const Map = () => {
  return (
    <>
    <MapContainer center={[37.6000, -95.6650]} zoom={4} scrollWheelZoom={false} className="providers-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup showCoverageOnHover={false}>
        <MarkersList />
      </MarkerClusterGroup>
    </MapContainer>
    </>
  )
}

export default Map;