import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {

    return (
        <nav>
            <div className="nav-wrapper"> 
                <h1><Link to='/'>Collect the Cosmos</Link></h1>
                {user ?
                <ul>
                    <li><Link to='/collections'>{user.name}'s Collections</Link></li>
                    <li><Link to='/search'>Search</Link></li>
                    <li><Link to='' onClick={handleLogout}>Log Out</Link></li>
                </ul>
                :
                <ul>
                    <li><Link to='/login'>Log In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
                }
            </div>
        </nav>

    )
}
export default NavBar;