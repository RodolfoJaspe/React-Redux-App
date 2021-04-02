import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Match from './Match';
import { getEplMatches } from '../actions/eplActions';


const PremierLeague = ({getEplMatches, loading, matches}) => {
    useEffect(() => {
        getEplMatches();
    },[getEplMatches]);

    if (loading){
        return <><h2>Loading...</h2></>;
    }
 
    return (
        <div>
            <h2>English Premier League</h2>
            {matches.map(match => (
                <Match match={match} key={match.title}/>
            ))} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        matches: state.eplReducer.matches,
        loading: state.eplReducer.loading
    }
}

export default connect(mapStateToProps, {getEplMatches})(PremierLeague)