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
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <h2>Log In</h2> 
        <form autoComplete="off" onSubmit={this.handleSubmit} >
          <div>
            <input type="text" autoComplete="off"  className="active" value={this.state.email} name="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input type="password" autoComplete="off" className="active" value={this.state.pw} name="pw" onChange={this.handleChange} />
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