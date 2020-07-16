import React, {Component} from 'react';
import './SearchPage.css';
import SearchResults from '../../components/SearchResults/SearchResults';

class SearchPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            query: ''
        }
    };

    formRef = React.createRef();

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.state.formData);
    }

    render() {
        return (
            <div className="SearchPage">
                <h3>Enter keyword to search for photos</h3>
                <form
                    ref={this.formRef}
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        name="query" 
                        className="query" 
                        type="text" 
                        value={this.state.formData.query}
                        onChange={this.handleChange}
                        required
                    >
                    </input>
                    <button
                        type="submit"
                        className="search-submit"
                        disabled={this.state.invalidForm}
                    >
                        Search
                    </button>
                </form><br></br>
                {this.props.searchResults.length ? 
                    <SearchResults 
                        handleGetPhotoDetails={this.props.handleGetPhotoDetails}
                        query={this.state.formData.query}
                        searchResults={this.props.searchResults[0]}
                    />
                    :
                    <h4 className="search-suggest">Try searching for "nebula"</h4>
                }
            </div>
        )
    }
}

export default SearchPage;