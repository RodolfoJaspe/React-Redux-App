import {FETCHING_EPL_MATCHES_START, FETCHING_EPL_MATCHES_SUCCESS, FETCHING_EPL_MATCHES_FAILURE} from "../actions/eplActions";

const initialState = {
    loading: false,
    matches: []
}

export const eplReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_EPL_MATCHES_START:
            return {...state, loading: true };
        case FETCHING_EPL_MATCHES_SUCCESS:
            // console.log(action.payload.length)
            return {...state, loading: false, matches: action.payload};
        case FETCHING_EPL_MATCHES_FAILURE:
            return {...state, loading: false};
        default:
            return state;    
    }
}