import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import ProvidersContext from '../../Context/ProvidersContext';

import './Map.scss';

const Map = () => {
  const { state } = useContext(ProvidersContext);

  let markers = null;
  if (state.providers ) {
    const { providers } = state;
    console.log(providers);
    markers = providers.map((provider) => {
      const {id, name,location: { latLng, address: {line} },} = provider;
      return (
        <Marker key={`markerid-${id}`} position={[latLng.lat, latLng.lng]}>
          <Popup>
            {name}
            <br />
            {line.join(' ')}
          </Popup>
        </Marker>
      )
    });
  }

  return (
    <MapContainer center={[37.6000, -95.6650]} zoom={4} scrollWheelZoom={false} className="providers-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup showCoverageOnHover={false}>
        {markers}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map;