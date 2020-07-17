import React, {Component} from 'react';
import './AddToCollectionForm.css';

class AddToCollectionForm extends Component {
    state = {
        formData: {
            photos: this.props.photoDetails,
            _id: ''
        }
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({ formData });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddPhotoToCollection(this.state.formData);
    }


    render() {
        return(
            <>
                <p>Add this photo to your collection:</p>
                <form
                    className="add-form"
                    onSubmit={this.handleSubmit}
                >
                    <select name="_id" onChange={this.handleChange} >
                        <option value='Please Select' default>Please Select</option>
                        {this.props.userCollections.map((collection, idx) =>
                            <option 
                                key={idx}
                                value={collection._id}
                            >
                                {collection.name}
                            </option>
                        )}
                    </select>
                    &nbsp;&nbsp;
                    <button
                        type="submit"
                        className="add"
                    >
                        Add to Collection
                    </button>
                </form>
            </>
        )
    }
}

export default AddToCollectionForm;