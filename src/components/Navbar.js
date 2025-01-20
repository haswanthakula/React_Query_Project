import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/traditional" className="navbar-item">Fetch</Link>
        <Link to="/tanstack" className="navbar-item">Query</Link>
        <Link to="/mutation" className="navbar-item">Mutation</Link>
      </div>
    </nav>
  );
};

export default Navbar;
