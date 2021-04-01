import {FETCHING_SERIEA_MATCHES_START, FETCHING_SERIEA_MATCHES_SUCCESS, FETCHING_SERIEA_MATCHES_FAILURE} from "../actions/serieAActions";

const initialState = {
    loading: false,
    matches: []
}

export const serieAReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SERIEA_MATCHES_START:
            return {...state, loading: true };
        case FETCHING_SERIEA_MATCHES_SUCCESS:
            return {...state, loading: false, matches: action.payload};
        case FETCHING_SERIEA_MATCHES_FAILURE:
            return {...state, loading: false};
        default:
            return state;    
    }
}