import React from 'react';
import './score.css'

function Score(props){
    return (
    <ul class="nav row scoregame">
        <li className="nav-item col-md-3">
        <a href="#" className="nav-link">Clicky Game</a>
        </li>
        <li className="nav-item col-md-3">
        <a href="#" className="nav-link">{props.result}</a>
        </li>
        <li className="nav-item col-md-3">
        <a href="#" className="nav-link">Score: {props.score} | Top Score: {props.topScore}</a>
        </li>
    </ul>
        )
}

export default Score;