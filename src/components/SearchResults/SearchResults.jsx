import React from 'react';
import './SearchResults.css';
import Result from '../../components/Result/Result';

const SearchResults = (props) => {
    return (
        <>
            {/* <h4>Results for "{props.query}"</h4> */}
            <div className="SearchResults">
                {props.searchResults.map((result, idx) =>
                    <Result 
                        key={idx} 
                        result={result}
                    />
                )}
            </div>
        </>
    )
}

export default SearchResults;