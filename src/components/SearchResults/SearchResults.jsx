import React from 'react';
import './SearchResults.css';
import Result from '../../components/Result/Result';

const SearchResults = (props) => {
    return (
        <>
            <div className="SearchResults">
                {props.currentResults.map((result, idx) =>
                    <Result 
                        key={idx} 
                        result={result}
                        idx={idx}
                        handleGetPhotoDetails={props.handleGetPhotoDetails}
                    />
                )}
            </div>
        </>
    )
}

export default SearchResults;