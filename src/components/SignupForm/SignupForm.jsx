import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import './SignupForm.css';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="SignupForm">
        <h2>Sign Up</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit} >
          <div>
            <input type="text" autoComplete="off" className="active" value={this.state.name} name="name" onChange={this.handleChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input type="text" autoComplete="off" className="active" value={this.state.email} name="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input type="password" autoComplete="off" className="active" value={this.state.password} name="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input type="password" autoComplete="off" className="active" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            <label htmlFor="confirm">Confirm Password</label>
          </div>
          <div className="buttons">
            <button id="signup" disabled={this.isFormInvalid()}>Sign Up</button>
            <Link id="cancel" to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;