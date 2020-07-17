import React from 'react';
import {Link} from 'react-router-dom';
import './ImageDetailPage.css';
import AddToCollectionForm from '../../components/AddToCollectionForm/AddToCollectionForm';

const ImageDetailPage = (props) => {
    let detail = props.photoDetails ?

        <div className="ImageDetailPage">
            <h2>{props.photoDetails.data[0].title}</h2>
            {props.userCollections.length ?
                <AddToCollectionForm 
                    photoDetails={props.photoDetails}
                    userCollections={props.userCollections}
                    handleAddPhotoToCollection={props.handleAddPhotoToCollection}
                />
            :
                <h3>You have not created any collections yet<br></br><br></br>
                <Link className="add" to='/collections/new'>Create a New Collection</Link></h3>
            }
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
    :
        <div className="ImageDetailPage">
            <h3>No details to display</h3>
            <Link to='/search' className="return">Return to Search</Link>
        </div>

    return (
        <>
            {detail}
        </>
    )
}

export default ImageDetailPage;