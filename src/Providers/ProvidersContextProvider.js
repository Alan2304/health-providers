import React, { useEffect, useReducer } from "react";

import ProvidersContext from "../Context/ProvidersContext";
import ProvidersReducer from "../Reducers/ProvidersReducer";
import { addProviders } from '../actions/ProvidersActions';
import {addSpecialties} from '../actions/SpecialtiesActions';

const initialState = {
  providers: [],
  filteredProviders: [],
  specialties: {},
};

const ProvidersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProvidersReducer, initialState);

  const fetchProviders = async () => {
    const providersJson = await fetch('providers_with_specialties.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const providers = await providersJson.json();
    dispatch(addProviders(providers))
  };

  const fetchSpecialities = async () => {
    const specialitiesJson = await fetch('specialties.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    });

    const specialities = await specialitiesJson.json();
    dispatch(addSpecialties(specialities));
  }

  useEffect(() => {
    fetchProviders();
    fetchSpecialities();
  }, []);

  return (
    <ProvidersContext.Provider value={{ state, dispatch }}>
      {children}
    </ProvidersContext.Provider>
  );
};

export default ProvidersContextProvider;
