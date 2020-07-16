import React from 'react';
import './ImageDetailPage.css';
import {Link} from 'react-router-dom';

const ImageDetailPage = (props) => {
    return (
        <div className="ImageDetailPage">
            <h2>{props.photoDetails.data[0].title}</h2>
            <h3 className="add"><Link to=''>Add to a Collection</Link></h3>
                <img 
                    src={props.photoDetails.links[0].href}
                    className="ImageDetail"
                    alt={props.photoDetails.data[0].title}
                ></img>
            <br></br>
            <p className="description">Description: {props.photoDetails.data[0].description}</p>
            <br></br>
            <Link to='/search' className="return">Return to Search Results</Link>
            <br></br><br></br>
        </div>
    )
}

export default ImageDetailPage;