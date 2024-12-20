import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTachometerAlt, FaBox, FaHeart, FaEnvelope, FaClipboardList, FaDollarSign, 
  FaCalendarAlt, FaTasks, FaPhone, FaFileInvoice, FaCubes, FaUsers, FaTable, FaBars 
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      {/* Toggle Button */}
      <div className="sidebar-toggle d-md-none p-2 bg-light shadow">
        <button 
          className="btn btn-primary" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars /> Menu
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar border-end shadow ${isSidebarOpen ? 'open' : 'closed'} d-flex flex-column`}>
        {/* Sidebar Header */}
        <div className="sidebar-header text-center py-3">
          <h4 className="fw-bold">DashStack</h4>
        </div>

        {/* Scrollable Sidebar Content */}
        <div className="flex-grow-1 overflow-auto px-2">
          {/* First Menu */}
          <div className="sidebar-menu mb-4">
            <ul className="list-unstyled">
              <li>
                <Link to="/admin" className="d-flex align-items-center p-2">
                  <FaTachometerAlt /> <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/products" className="d-flex align-items-center p-2">
                  <FaBox /> <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="d-flex align-items-center p-2">
                  <FaHeart /> <span>Favorites</span>
                </Link>
              </li>
              <li>
                <Link to="/inbox" className="d-flex align-items-center p-2">
                  <FaEnvelope /> <span>Inbox</span>
                </Link>
              </li>
              <li>
                <Link to="/order-list" className="d-flex align-items-center p-2">
                  <FaClipboardList /> <span>Order List</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="Mid_line"></div>

          {/* Second Menu */}
          <div className="sidebar-menu">
            <ul className="list-unstyled">
              <li>
                <Link to="/pricing" className="d-flex align-items-center p-2">
                  <FaDollarSign /> <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="d-flex align-items-center p-2">
                  <FaCalendarAlt /> <span>Calendar</span>
                </Link>
              </li>
              <li>
                <Link to="/todo" className="d-flex align-items-center p-2">
                  <FaTasks /> <span>To-Do</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="d-flex align-items-center p-2">
                  <FaPhone /> <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/invoice" className="d-flex align-items-center p-2">
                  <FaFileInvoice /> <span>Invoice</span>
                </Link>
              </li>
              <li>
                <Link to="/ui-elements" className="d-flex align-items-center p-2">
                  <FaCubes /> <span>UI Elements</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="d-flex align-items-center p-2">
                  <FaUsers /> <span>Team</span>
                </Link>
              </li>
              <li>
                <Link to="/table" className="d-flex align-items-center p-2">
                  <FaTable /> <span>Table</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
