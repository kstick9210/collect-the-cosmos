import React from 'react';
import './PhotoCard.css';

const PhotoCard = (props) => {
    return (
        <div className="PhotoCard">
            <img
                className="PhotoCard-Image" 
                src={props.photo.links[0].href}
                alt={props.photo.data[0].title}
            ></img>
            <div className="PhotoCard-Details">
                <h3>{props.photo.data[0].title}</h3>
                <p className="PhotoCard-Description">{props.photo.data[0].description}</p>
                {/* <p
                    className="delete"
                    onClick={props.handleDeleteFromCollection}
                >
                    Delete Photo from Collection
                </p> */}
            </div>
        </div>
    )
}

export default PhotoCard;