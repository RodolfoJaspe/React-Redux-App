import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Match from './Match';
import { getSerieAMatches } from '../actions/serieAActions';

const SerieA = ({getSerieAMatches}) => {
    useEffect(() => {
        getSerieAMatches();
    },[getSerieAMatches]);

    if (props.loading){
        return <><h2>Loading...</h2></>;
    }

    return (
        <div>
            <h2>Serie A</h2>
            {props.matches.map(match => (
                <Match match={match} key={match.title}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        matches: state.serieAReducer.matches,
        loading: state.serieAReducer.loading
    }
}

export default connect(mapStateToProps, {getSerieAMatches})(SerieA)