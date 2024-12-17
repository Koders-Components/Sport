import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for routing
import './Sidebar.css';  // Import the CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>DashStack</h4>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/products">Products</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/order-list">Order List</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
