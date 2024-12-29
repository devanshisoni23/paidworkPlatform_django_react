import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

const Navbar2 = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <div className='navbar-logo'>
          <Link to="/">Paidwork</Link>
        </div>
        <ul className='navbar-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">How it works</Link></li>
          <li><Link to="/Contact">Cashback</Link></li>
        </ul>
      </div>
      <div className='navbar-right'>
        <button className="btn">Sign In</button>
        <button className="btn">Register</button>
      </div>
    </nav>
  );
};

export default Navbar2;
