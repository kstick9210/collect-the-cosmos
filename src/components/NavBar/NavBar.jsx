import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper"> 
                <h1><Link to='/'>Collect the Cosmos</Link></h1>
                <ul>
                    <li><a href=" ">Welcome, {user.name}</a></li>
                    <li><a href=" " onClick={handleLogout}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    </>
    :
    <>
        <nav>
            <div className="nav-wrapper">
                <h1><Link to='/'>Collect the Cosmos</Link></h1>
                <ul>
                    <li><a href="/login">Log In</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </>

    return (
    <>
        {nav}
    </>
    )
}
export default NavBar;