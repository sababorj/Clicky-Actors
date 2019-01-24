import React from 'react';

function Score(props){
    return (
    <nav className="navbar">
    <ul>
        <li className="brand">
        <a href="/">Clicky Game</a>
        </li>
        <li>
        {props.result}
        </li>
        <li>
        Score: {props.score} | Top Score: {props.topScore}
        </li>
    </ul>
    </nav>
    )
}

export default Score;