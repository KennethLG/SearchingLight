import React from 'react';
import {Link} from 'react-router-dom';
import mariposa from '../assets/Mariposa.jpeg'

export default function Header(){ 
    return(
        <header>
            <div className="header_container" id="menu">
                <ul>
                    <Link to="/" className="header_home logo" >
                        <li>Home</li>
                    </Link>
                    <Link to="/play" className="header_play logo">
                        <li>Play</li>
                    </Link>
                    <Link to="/about" className="header_about logo">
                        <li>About</li>
                    </Link>
                    <Link to="/contact" className="header_contact logo">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
}