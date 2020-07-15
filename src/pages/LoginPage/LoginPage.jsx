import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../services/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <h2>Log In</h2> 
        <form className="col s12" autoComplete="off" onSubmit={this.handleSubmit} >
          <div className="row">
            <input type="text" autoComplete="off" id="email" className="active" value={this.state.email} name="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="row">
            <input type="password" autoComplete="off" className="active" id="password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="buttons">
              <button id="login">Log In</button>
              <Link id="cancel" to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;