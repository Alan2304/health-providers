export const ADD_PROVIDERS = 'ADD_PROVIDERS';

export const addProviders = (providers) => ({
    type: ADD_PROVIDERS,
    payload: providers
});

export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const filterByName = (providerName) => ({
    type: FILTER_BY_NAME,
    payload: providerName
});