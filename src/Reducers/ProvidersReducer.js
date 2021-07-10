import {ADD_RESULTS} from '../actions/ProvidersActions';

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_RESULTS: 
            return {
                ...state,
                providers: action.payload,
                loading: false
            }
        default: 
            return state;
    }
}

export default reducer;