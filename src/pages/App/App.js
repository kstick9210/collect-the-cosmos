import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import './App.css';
import userService from '../../services/userService';
import * as PhotosAPI from '../../services/nasaphotos-api';
import * as CollectionsAPI from '../../services/collections-api';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import LandingPage from '../LandingPage/LandingPage';
import SearchPage from '../SearchPage/SearchPage';
import ImageDetailPage from '../ImageDetailPage/ImageDetailPage';
import CreateCollectionPage from '../CreateCollectionPage/CreateCollectionPage';
import CollectionsPage from '../CollectionsPage/CollectionsPage';

class App extends Component {
  state = {
    user: userService.getUser(),
    searchResults: [],
    photoDetails: '',
    userCollections: []
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, searchResults: [], photoDetails: '', userCollections: [] });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
    this.handleGetUserCollections(this.state.user);
  }

  handleGetUserCollections = async user => {
    const userCollections = await CollectionsAPI.index();
    this.setState({userCollections})
  }
  
  handleSearch = async formData => {
    const searchResults = await PhotosAPI.search(formData);
    this.setState({ searchResults: [searchResults.collection.items] });
    // overwriting array rather than merging - only want current search results when a new search is conducted
  }
  
  handleGetPhotoDetails = (idx) => {
    this.setState({ photoDetails: this.state.searchResults[0][idx]});
  }
  
  handleCreateCollection = async newCollectionData => {
    const newCollection = await CollectionsAPI.create(newCollectionData);
    this.setState(state => ({
      userCollections: [...state.userCollections, newCollection]
    }), () => this.props.history.push('/collections'));
  }

  handleAddPhotoToCollection = async updatedCollectionData => {
    const updatedCollection =  await CollectionsAPI.update(updatedCollectionData);
    const newCollectionsArray = this.state.userCollections.map(collection =>
      collection._id === updatedCollection._id ? updatedCollection : collection
    );
    this.setState(
      {collections: newCollectionsArray}
      //() => this.props.history.push('/search')
    );
  }

  async componentDidMount() {
    // retrieve user's collections and set state if user is already authenticated when page loads
    if (userService.getUser()) {
      this.handleGetUserCollections(this.state.user);
    }
  }

  render () {
    return (
      <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <main className="App-main">
          <Route exact path='/' render={({ history}) =>
            <LandingPage 
              user={this.state.user}
            />
          }>
          </Route>
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
                handleGetPhotoDetails={this.handleGetPhotoDetails}
                searchResults={this.state.searchResults}
              />
            :
              <Redirect to='/login' />
          }>
          </Route>
          <Route path='/detail' render={({ history }) =>
            userService.getUser() ?
              <ImageDetailPage 
                history={history}
                photoDetails={this.state.photoDetails}
                userCollections={this.state.userCollections}
                handleAddPhotoToCollection={this.handleAddPhotoToCollection}
              />
            :
              <Redirect to='/login' />
          }>
          </Route>
          <Route exact path='/collections/new' render={({ history }) =>
            userService.getUser() ?
              <CreateCollectionPage 
                history={history}
                handleCreateCollection={this.handleCreateCollection}
              />
            :
            <Redirect to='/login' />
          }
          >
          </Route>
          <Route exact path='/collections' render={({ history }) =>
            userService.getUser() ?
              <CollectionsPage 
                history={history}
                user={this.state.user}
                userCollections={this.state.userCollections}
              />
            :
            <Redirect to='/login' />
          }
          >
          </Route>
        </main>
        <Footer/>
      </>
    );
  }
}


export default App;