import React, {Component} from 'react';
import './CreateCollectionPage.css';

class CreateCollectionPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: ''
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
        this.props.handleCreateCollection(this.state.formData);
    }

    render() {
        return(
            <div className="CreateCollectionPage">
                <h3>Enter the name of your new photo collection</h3>
                <form
                    ref={this.formRef}
                    onSubmit={this.handleSubmit}
                >
                    <input
                        name="name"
                        className="collectionName"
                        type="text"
                        value={this.state.formData.collectionName}
                        onChange={this.handleChange}
                        required
                    >
                    </input>
                    <button
                        type="submit"
                        className="create-submit"
                        disabled={this.state.invalidForm}
                    >
                        Create New Collection
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateCollectionPage;