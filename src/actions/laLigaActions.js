import axios from "axios";

export const FETCHING_LALIGA_MATCHES_START= "FETCHING_LALIGA_MATCHES_START";
export const FETCHING_LALIGA_MATCHES_SUCCESS= "FETCHING_LALIGA_MATCHES_SUCCESS";
export const FETCHING_LALIGA_MATCHES_FAILURE= "FETCHING_LALIGA_MATCHES_FAILURE";


const headers = {
    Accept: "application/json"
}

export const getLaLigaMatches = () => dispatch => {
    dispatch({type: FETCHING_LALIGA_MATCHES_START});

    axios.get("https://www.scorebat.com/video-api/v1/", {headers})
    .then(res => {
        const laLigaMatches= res.data.filter(match=>match.competition.id===14)
        dispatch({type: FETCHING_LALIGA_MATCHES_SUCCESS, payload: laLigaMatches})
    })
    .catch(err => {  
        dispatch({type: FETCHING_LALIGA_MATCHES_FAILURE, payload: err})
})
}