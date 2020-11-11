import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <div className="header_container">
                <ul>
                    <Link to="/" className="header_play">
                        <li className="logo">Logo</li>
                    </Link>
                    <Link to="/play" className="header_play">
                        <li>Play</li>
                    </Link>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    );
}