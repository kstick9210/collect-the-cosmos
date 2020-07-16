import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';

const LandingPage = (props) => {
    let landingPage = props.user ?
        <div className="LandingPage">
            <h2>Welcome, {props.user.name}</h2>
        </div>
    :
        <div className="LandingPage">
            <h2>Create collections of your favorite corners of the universe.</h2>
            <h3><Link to='/signup'>Sign up</Link> to get started</h3>
        </div>
    

    return (
        <>
            {landingPage}
        </>
    )
}

export default LandingPage;