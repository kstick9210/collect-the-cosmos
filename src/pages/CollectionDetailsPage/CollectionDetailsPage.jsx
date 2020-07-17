import React from 'react';
import './CollectionDetailsPage.css';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

const CollectionDetailsPage = (props) => {
    return (
        <div className="CollectionDetails">
            <h1 className="CollectionTitle">{props.selectedCollection.name}</h1>
            {props.selectedCollection.photos.map((photo, idx) =>
                <PhotoCard 
                    key={idx}
                    photo={photo}
                />
            )}
        </div>
    )
}

export default CollectionDetailsPage;