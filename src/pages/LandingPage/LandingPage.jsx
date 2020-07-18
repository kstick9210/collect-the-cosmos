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
            <div className="landing-images-wrapper">
                <img 
                    src="/assets/Earthrise-Apollo-11.jpg"
                    alt="Earthrise Apollo 11"
                    className="landing-image"
                ></img>
                <img 
                    src="/assets/Crab-Nebula-Supernova-Hubble.jpg"
                    alt="Crab Nebula Supernova"
                    className="landing-image"
                ></img>
                <img 
                    src="/assets/Saturn.jpg"
                    alt="Saturn"
                    className="landing-image"
                ></img>
                <img 
                    src="/assets/Bipolar-Star-Forming-Region-Hubble.jpg"
                    alt="Bipolar Star-Forming Region"
                    className="landing-image"
                ></img>
                <img 
                    src="/assets/Mars-Jezero-Crater.jpg"
                    alt="Mars Jezero Crater"
                    className="landing-image"
                ></img>
                <img 
                    src="/assets/Nebula-Dorado-Constellation-Hubble.jpg"
                    alt="Nebula Dorado Constellation"
                    className="landing-image"
                ></img>
                <img 
                    src="/assets/Three-Light-Year-Tall-Pillar-of-Gas-and-Dust-Hubble.jpg"
                    alt="Three Light Year Tall Pillar of Gas and Dust"
                    className="landing-image"
                ></img>
            </div>
        </div>
    

    return (
        <>
            {landingPage}
        </>
    )
}

export default LandingPage;