import React from 'react';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper">
                <h1>Collect the Cosmos</h1>
                <ul className="right">
                    <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
                    <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    </>
    :
    <>
        <nav>
            <div className="nav-wrapper">
                <h1>Collect the Cosmos</h1>
                <ul className="right">
                    <li><a href="/login" className="nav-link">Log In</a></li>
                    <li><a href="/signup" className="nav-link">Sign Up</a></li>
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