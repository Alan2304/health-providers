import React, { useEffect, useReducer } from "react";

import ProvidersContext from "../Context/ProvidersContext";
import ProvidersReducer from "../Reducers/ProvidersReducer";
import { addResults } from '../actions/ProvidersActions';

const initialState = {
  providers: [],
  filteredProviders: [],
  loading: true,
};

const ProvidersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProvidersReducer, initialState);

  const fetchProviders = async () => {
    const providersJson = await fetch("providers_with_specialties.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const providers = await providersJson.json();
    dispatch(addResults(providers))
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return (
    <ProvidersContext.Provider value={{ state, dispatch }}>
      {children}
    </ProvidersContext.Provider>
  );
};

export default ProvidersContextProvider;
