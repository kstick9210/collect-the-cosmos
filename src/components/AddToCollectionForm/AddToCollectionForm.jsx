import React, {Component} from 'react';
import './AddToCollectionForm.css';

class AddToCollectionForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            photo: ''
        }
    }

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
    }


    render() {
        return(
            <>
                <p>Add this photo to your collection:</p>
                <form
                    className="add-form"
                >
                    <input
                        type="hidden"
                        name="photo"
                        value={this.props.photoDetails}
                    ></input>
                    <select name="name">
                    {this.props.userCollections.map((collection, idx) =>
                        <option 
                            key={idx}
                            value={collection.name}
                            onChange={this.handleChange}
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