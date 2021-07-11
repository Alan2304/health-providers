import {ADD_PROVIDERS} from '../actions/ProvidersActions';
import { ADD_SPECIALTIES, FILTER_SPECIALTY } from '../actions/SpecialtiesActions';

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
        case FILTER_SPECIALTY:
            return {
                ...state,
                specialties: {
                    ...state.specialties,
                    [action.payload]: {
                        ...state.specialties[action.payload],
                        checked: !state.specialties[action.payload].checked
                    } 
                }
            }
        default: 
            return state;
    }
}

export default reducer;