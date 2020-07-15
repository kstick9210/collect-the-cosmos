import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import './App.css';
import userService from '../../services/userService';
import * as PhotosAPI from '../../services/nasaphotos-api';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import LandingPage from '../LandingPage/LandingPage';
import SearchPage from '../SearchPage/SearchPage';

class App extends Component {
  state = {
    user: userService.getUser(),
    searchResults: []
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleSearch = async formData => {
    const searchResults = await PhotosAPI.search(formData);
    this.setState(state => ({
      searchResults: [searchResults.collection.items] 
      // overwriting array rather than merging - only want current search results when a new search is conducted
    }))
  }

  render () {
    return (
      <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <main className="App-main">
          <LandingPage />
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
          <Route exact path='/search' render={({ history }) =>
            userService.getUser() ?
              <SearchPage 
                history={history}
                handleSearch={this.handleSearch}
                searchResults={this.state.searchResults}
              />
            :
              <Redirect to='/login' />
          }>
          </Route>
        </main>
        <Footer/>
      </>
    );
  }
}


export default App;