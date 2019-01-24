import React from 'react';

function Score(props){
    return (
    <ul class="nav">
        <li className="nav-item">
        <a href="#" className="nav-link">Clicky Game</a>
        </li>
        <li className="nav-item">
        <a href="#" className="nav-link">{props.result}</a>
        </li>
        <li className="nav-item">
        <a href="#" className="nav-link">Score: {props.score} | Top Score: {props.topScore}</a>
        </li>
    </ul>
        )
}

export default Score;