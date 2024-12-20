import React from 'react';
import './Dashbord.css';
import { LuUsers } from "react-icons/lu";
import { IoLogoDropbox } from "react-icons/io";
import { FaClockRotateLeft, FaArrowTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  const totalUsers = 1500;
  const userIncrement = 5; // Increment (positive) or decrement (negative)
  const percentageChange = (userIncrement / totalUsers) * 100;

  return (
    <div className="main_dash">
      <h3 className="mb-4">Dashboard</h3>

      {/* Bootstrap Grid */}
      <div className="dashboard row g-4">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-3">
          <div className="dashboard-box h-100">
            <h3 className="h6">Total Users</h3>
            <div className="dashboard-content">
              <div className="d-flex align-items-center">
                <div className="user-stats">
                  <p className="user-count h2 fw-bold">{totalUsers}</p>
                </div>
                <div className="User_icon bg-primary bg-opacity-10 ms-auto">
                  <LuUsers className="text-primary" />
                </div>
              </div>
              <div className="mt-2">
                <span className={userIncrement >= 0 ? 'increase' : 'decrease'}>
                  {userIncrement >= 0 ? '↑' : '↓'} {Math.abs(userIncrement)} users
                </span>
                <span className="percentage-change ms-2">
                  {userIncrement >= 0 ? '+' : '-'}
                  {Math.abs(percentageChange).toFixed(2)}% (since yesterday)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6 col-lg-3">
          <div className="dashboard-box h-100">
            <h3 className="h6">Total Users</h3>
            <div className="dashboard-content">
              <div className="d-flex align-items-center">
                <div className="user-stats">
                  <p className="user-count h2 fw-bold">{totalUsers}</p>
                </div>
                <div className="User_icon uic1 ms-auto">
                  <IoLogoDropbox />
                </div>
              </div>
              <div className="mt-2">
                <span className={userIncrement >= 0 ? 'increase' : 'decrease'}>
                  {userIncrement >= 0 ? '↑' : '↓'} {Math.abs(userIncrement)} users
                </span>
                <span className="percentage-change ms-2">
                  {userIncrement >= 0 ? '+' : '-'}
                  {Math.abs(percentageChange).toFixed(2)}% (since yesterday)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-6 col-lg-3">
          <div className="dashboard-box h-100">
            <h3 className="h6">Total Users</h3>
            <div className="dashboard-content">
              <div className="d-flex align-items-center">
                <div className="user-stats">
                  <p className="user-count h2 fw-bold">{totalUsers}</p>
                </div>
                <div className="User_icon uic2 ms-auto">
                  <FaArrowTrendUp />
                </div>
              </div>
              <div className="mt-2">
                <span className={userIncrement >= 0 ? 'increase' : 'decrease'}>
                  {userIncrement >= 0 ? '↑' : '↓'} {Math.abs(userIncrement)} users
                </span>
                <span className="percentage-change ms-2">
                  {userIncrement >= 0 ? '+' : '-'}
                  {Math.abs(percentageChange).toFixed(2)}% (since yesterday)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6 col-lg-3">
          <div className="dashboard-box h-100">
            <h3 className="h6">Total Users</h3>
            <div className="dashboard-content">
              <div className="d-flex align-items-center">
                <div className="user-stats">
                  <p className="user-count h2 fw-bold">{totalUsers}</p>
                </div>
                <div className="User_icon uic3 ms-auto">
                  <FaClockRotateLeft />
                </div>
              </div>
              <div className="mt-2">
                <span className={userIncrement >= 0 ? 'increase' : 'decrease'}>
                  {userIncrement >= 0 ? '↑' : '↓'} {Math.abs(userIncrement)} users
                </span>
                <span className="percentage-change ms-2">
                  {userIncrement >= 0 ? '+' : '-'}
                  {Math.abs(percentageChange).toFixed(2)}% (since yesterday)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="Graph mt-4">
        <div className="grapg_pattern">
          <img src="./item/img/Grap.png" alt="Graph_alt" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;