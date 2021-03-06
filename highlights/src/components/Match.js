import React from 'react';
import './Match.css';

const Match = (props) => {
    const gameEmbed = props.match.embed;

    return (
        <div className="match" >
            <h3>{props.match.title}</h3> 
            <div dangerouslySetInnerHTML={{__html:gameEmbed}}></div>
        </div>

    )
}

export default Match
