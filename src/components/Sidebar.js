// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h2>Paidwork</h2>
      </div>
      <div className='sidebar-nav'>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/earn">Earn</Link></li>
          <li><Link to="/billings">Billings</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
        </ul>
      </div>
      <div className='sidebar-footer'>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
