import React from 'react';
import './Result.css';

const Result = (props) => {
    return (
        <div className="Result">
            <img 
                src={props.result.links[0].href}
                className="Result-thumb"
            ></img>
            {/* <p className="Result-title">{props.result.data[0].title}</p> */}
        </div>
    )
}

export default Result;