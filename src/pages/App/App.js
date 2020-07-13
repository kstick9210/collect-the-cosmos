import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import './App.css';
import userService from '../../services/userService';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

class App extends Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState(
      { user: null },
      () => this.props.history.push('/')
    );
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render () {
    return (
      <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <main className="App-main">
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }>
          </Route>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }>
          </Route>
        </main>
        <Footer/>
      </>
    );
  }
}


export default App;
