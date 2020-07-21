import React, {Component} from 'react';
import './SearchPage.css';
import SearchResults from '../../components/SearchResults/SearchResults';
import ReactPaginate from 'react-paginate';

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
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.state.formData);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        this.props.handleSearchPageUpdate(selectedPage);
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
                {this.props.currentResults.length ? 
                    <>
                        <SearchResults 
                            handleGetPhotoDetails={this.props.handleGetPhotoDetails}
                            query={this.state.formData.query}
                            currentResults={this.props.currentResults[0]}
                        />
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.props.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                        />
                    </>
                    :
                    <h4 className="search-suggest">Try searching for "nebula"</h4>
                }
            </div>
        )
    }
}

export default SearchPage;