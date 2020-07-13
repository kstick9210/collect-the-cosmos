import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            
            <p>
               Created by Kathleen Stickel<br></br>
               <a href="https://github.com/kstick9210/collect-the-cosmos" target="_blank" rel="noopener noreferrer">
                    <img className="gh" alt="GitHib Logo" src="https://i.imgur.com/71WSpc0.png" />
                    <img className="gh" alt="GitHub Logo" src="https://i.imgur.com/3J01ITc.png" />
                </a> 
            </p>
            <p id="disclaim">All images obtained from <a href="https://images.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA Image and Video Library</a></p>
        </footer>
    )
}

export default Footer;