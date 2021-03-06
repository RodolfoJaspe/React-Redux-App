import axios from "axios";

export const FETCHING_SERIEA_MATCHES_START= "FETCHING_SERIEA_MATCHES_START";
export const FETCHING_SERIEA_MATCHES_SUCCESS= "FETCHING_SERIEA_MATCHES_SUCCESS";
export const FETCHING_SERIEA_MATCHES_FAILURE= "FETCHING_SERIEA_MATCHES_FAILURE";


const headers = {
    Accept: "application/json"
}

export const getSerieAMatches = () => dispatch => {
    dispatch({type: FETCHING_SERIEA_MATCHES_START});

    axios.get("https://www.scorebat.com/video-api/v1/", {headers})
    .then(res => {
        console.log(res)
        const serieAMatches = res.data.filter(match => match.competition.id === 13)

        dispatch({type: FETCHING_SERIEA_MATCHES_SUCCESS, payload: serieAMatches})
    })
    .catch(err => {  
        dispatch({type: FETCHING_SERIEA_MATCHES_FAILURE, payload: err})
   })
   axios.get("")
}