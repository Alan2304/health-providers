import { ADD_PROVIDERS, FILTER_BY_NAME, RESET_FILTERS } from '../actions/ProvidersActions';
import { ADD_SPECIALTIES, FILTER_SPECIALTIES, RESET_FILTER_SPECIALTIES } from '../actions/SpecialtiesActions';

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_PROVIDERS: 
            return {
                ...state,
                providers: action.payload,
            }
        case ADD_SPECIALTIES:
            return {
                ...state,
                specialties: {...action.payload}
            }
        case FILTER_SPECIALTIES:
            const filteredProvidersBySpeciality = state.providers.filter((provider) => {
                return provider.specialties.some((specialty) => action.payload.includes(specialty));
            });
            return {
                ...state,
                filteredProviders: filteredProvidersBySpeciality
            }
        case FILTER_BY_NAME:
            const filteredProvidersByName = state.providers.filter((provider) => provider.name.includes(action.payload));
            return {
                ...state,
                filteredProviders: filteredProvidersByName
            }
        case RESET_FILTERS:
        case RESET_FILTER_SPECIALTIES: 
            return {
                ...state,
                filteredProviders: []
            }
        default: 
            return state;
    }
}

export default reducer;