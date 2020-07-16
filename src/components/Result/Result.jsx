import React from 'react';
import {Link} from 'react-router-dom';
import './Result.css';

const Result = (props) => {
    return (
        
            <Link 
                to={`detail/${props.idx}`} 
                className="Result"
                onClick={() => props.handleGetPhotoDetails(props.idx)}
            >
                <img 
                    src={props.result.links[0].href}
                    className="Result-thumb"
                    alt={props.result.data[0].title}
                ></img>
                {/* <p className="Result-title">{props.result.data[0].title}</p> */}
            </Link>
        
    )
}

export default Result;