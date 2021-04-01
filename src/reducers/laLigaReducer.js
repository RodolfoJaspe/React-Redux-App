import {FETCHING_LALIGA_MATCHES_START, FETCHING_LALIGA_MATCHES_SUCCESS, FETCHING_LALIGA_MATCHES_FAILURE} from "../actions/laLigaActions";

const initialState = {
    loading: false,
    matches: []
}

export const laLigaReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCHING_LALIGA_MATCHES_START:
            return {...state, loading: true };
        case FETCHING_LALIGA_MATCHES_SUCCESS:
            return {...state, loading: false, matches: action.payload};
        case FETCHING_LALIGA_MATCHES_FAILURE:
            return {...state, loading: false};
        default:
            return state;    
    }
}