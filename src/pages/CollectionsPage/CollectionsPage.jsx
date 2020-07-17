import React from 'react';
import {Link} from 'react-router-dom';
import './CollectionsPage.css';
import CollectionCard from '../../components/CollectionCard/CollectionCard';

const CollectionsPage = (props) => {
    let page = props.userCollections.length ?

        <div className="CollectionsPage">
            <h2>{props.user.name}'s Collections</h2>
            <Link className="add" to='/collections/new'>Create a New Collection</Link><br></br>
            <div className="collections-wrapper"> 
                {props.userCollections.map((collection, idx) =>
                    <CollectionCard 
                        key={idx}
                        collection={collection}
                    />
                )}
            </div>
        </div>
    :
        <div className="CollectionsPage">
            <h2>You have not created any collections yet</h2>
            <h3><Link className="add" to='/collections/new'>Create a New Collection</Link></h3>
        </div>

    return (
        <>
            {page}
        </>
    )
}

export default CollectionsPage;