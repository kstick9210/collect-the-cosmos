import React from 'react';
import {Link} from 'react-router-dom';
import './CollectionCard.css';

const CollectionCard = (props) => {
    let card = props.collection.photos.length ?
        
        
        <Link
            to='/'
            className="CollectionCard"
            style={{ background: `url(${props.collection.photos[0].links[0].href}) center` }}
        >
            <p className="CollectionCard-Title">{props.collection.name}</p>
        </Link>
        
    :
        <div className="CollectionCard">
            <p className="no-photos">No photos added yet</p>
            <p className="CollectionCard-Title">{props.collection.name}</p>
        </div>


    return (
       <>
        {card}
       </>
    )
}

export default CollectionCard;