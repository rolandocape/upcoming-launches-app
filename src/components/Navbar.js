import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/medoptic-logo.png";

function Navbar() {
    return (
        <div className="container">
            <h3>Launches App</h3>
            <img src={logo} />
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link> |
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;