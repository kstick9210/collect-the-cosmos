import React from 'react';
import './CollectionDetailsPage.css';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

const CollectionDetailsPage = ({ selectedCollection, handleDeleteCollection }) => {
    return (
        <div className="CollectionDetails">
            <div className="title-wrapper">
                <h1 className="CollectionTitle">{selectedCollection.name}</h1>
                <p
                    className="delete"
                    onClick={() => handleDeleteCollection(selectedCollection._id)}
                >
                    Delete {selectedCollection.name} Collection
                </p>
            </div>
            {selectedCollection.photos.map((photo, idx) =>
                <PhotoCard 
                    key={idx}
                    photo={photo}
                />
            )}
        </div>
    )
}

export default CollectionDetailsPage;