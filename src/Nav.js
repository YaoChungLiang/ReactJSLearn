import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './logo.svg';


function Nav(){
    const navStyle = {
        color:'white'
    };

    return(
        <nav>
            <h3>
                logo
                <img src={logo} className="App-logo" alt="logo" />
            </h3>
            <ul className="nav-links">
                <Link style={navStyle} to = '/about'>
                    <li>About Something</li>
                </Link>
                <Link style={navStyle} to = '/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}
export default Nav;