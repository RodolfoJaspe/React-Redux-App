import axios from "axios";

export const FETCHING_EPL_MATCHES_START= "FETCHING_EPL_MATCHES_START";
export const FETCHING_EPL_MATCHES_SUCCESS= "FETCHING_EPL_MATCHES_SUCCESS";
export const FETCHING_EPL_MATCHES_FAILURE= "FETCHING_EPL_MATCHES_FAILURE";


const headers = {
    Accept: "application/json"
}

export const getEplMatches = () => dispatch => {
    dispatch({type: FETCHING_EPL_MATCHES_START});

    axios.get("https://www.scorebat.com/video-api/v1/", {headers})
    .then(res => {
        console.log(res)
        const eplMatches = res.data.filter(match => match.competition.id === 15)

        dispatch({type: FETCHING_EPL_MATCHES_SUCCESS, payload: eplMatches})
    })
    .catch(err => {  
        dispatch({type: FETCHING_EPL_MATCHES_FAILURE, payload: err})
   })
   axios.get("")
}