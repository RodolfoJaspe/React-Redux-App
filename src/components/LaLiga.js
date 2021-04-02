import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Match from './Match';
import { getLaLigaMatches } from '../actions/laLigaActions';

const LaLiga = ({getLaLigaMatches, loading, matches}) => {
    
    useEffect(() => {
        getLaLigaMatches();
    },[getLaLigaMatches]);

    if (loading){
        return <><h2>Loading...</h2></>;
    }

    return (
        <div>
            <h2>La Liga</h2>
            {matches.map(match => (
                <Match match={match} key={match.title}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        matches: state.laLigaReducer.matches,
        loading: state.laLigaReducer.loading
    }
}

export default connect(mapStateToProps, {getLaLigaMatches})(LaLiga)