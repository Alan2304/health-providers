import {ADD_PROVIDERS} from '../actions/ProvidersActions';
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
            const { providers } = state
            const filteredProviders = providers.filter((provider) => {
                return provider.specialties.some((specialty) => action.payload.includes(specialty));
            });
            return {
                ...state,
                filteredProviders
            }
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