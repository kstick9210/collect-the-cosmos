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
                    <li><Link to=' '>{user.name}'s Collections</Link></li>
                    <li><Link to='/search'>Search</Link></li>
                    <li><Link to='' onClick={handleLogout}>Log Out</Link></li>
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
                    <li><Link to='/login'>Log In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
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