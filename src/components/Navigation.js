import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation() {
    return (
        <div className="nav">
            <Link to="/"><button><h1>Home</h1></button></Link>
            <Link to="/about"><button><h1>About</h1></button></Link>
            <Link to="/fav"><button><h1>Fav</h1></button></Link>
        </div>
    );
}

export default Navigation;

