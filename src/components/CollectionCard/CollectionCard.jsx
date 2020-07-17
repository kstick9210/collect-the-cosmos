import React from 'react';
import {Link} from 'react-router-dom';
import './CollectionCard.css';

const CollectionCard = (props) => {
    return (
        <div className="CollectionCard">
            <Link to='/'>
                {props.collection.photos.length ?
                    <img
                        src=''
                        className="CollectionCard-Image"
                        alt=''
                    >
                    </img>
                :
                    <p className="no-photos">No photos added yet</p>
                }
                <p className="CollectionCard-Title">{props.collection.name}</p>
            </Link>
        </div>
    )
}

export default CollectionCard;