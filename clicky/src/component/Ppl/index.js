import React from 'react';
import "./card.css";

function Ppl(props) {
   return (
       <div style= {{backgroundImage: `url(${props.image})` }}
       className="ppl col-md-4"
       onClick={() => props.clickHandle(props.id)}>
       </div>
   ) 
};

export default Ppl;