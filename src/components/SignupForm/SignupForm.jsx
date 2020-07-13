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
      // Using ES2015 Computed Property Names
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
      // Invalid user data (probably duplicate email)
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
        <form className="" autocomplete="off" onSubmit={this.handleSubmit} >
          <div className="row">
            <input type="text" autocomplete="off" className="active" id="name" value={this.state.name} name="name" onChange={this.handleChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="row">
            <input type="text" autocomplete="off" className="active" id="email" value={this.state.email} name="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="row">
            <input type="password" autocomplete="off" className="active" id="password" value={this.state.password} name="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="row">
            <input type="password" autocomplete="off" className="active" id="confirm" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
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