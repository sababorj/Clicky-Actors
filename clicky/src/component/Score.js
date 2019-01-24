import React from 'react';

function Score(props){
    return (
    <nav className="nav">
    <ul>
        <li className="nav-item">
        Clicky Game
        </li>
        <li className="nav-item">
        {props.result}
        </li>
        <li className="nav-item">
        Score: {props.score} | Top Score: {props.topScore}
        </li>
    </ul>
    </nav>
    )
}

export default Score;