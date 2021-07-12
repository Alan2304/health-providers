
import React, { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';

import ProvidersContext from '../../../Context/ProvidersContext';
import ProviderMarkerIcon from '../ProviderMarkerIcon';

const MakersList = () => {
    const { state } = useContext(ProvidersContext);

  if (state.providers ) {
    const { providers, filteredProviders } = state;
    const listOfProviders = filteredProviders.length > 0 ? filteredProviders : providers;
    const markers = listOfProviders.map((provider) => {
      const {id, name,location: { latLng, address: {line} },} = provider;
      return (
        <Marker key={`markerid-${id}`} position={[latLng.lat, latLng.lng]} icon={ProviderMarkerIcon}>
          <Popup>
            {name}
            <br />
            {line.join(' ')}
          </Popup>
        </Marker>
      )
    });

    return markers
  }

  return null;
};

export default MakersList
