// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
    <Link to="/">
      <img src="/name.png" height="80" alt="Home" className="logo-image" />
    </Link>
  </div>
      <ul className="navbar-links">
        <li><Link to="/profile" className="nav-link">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
