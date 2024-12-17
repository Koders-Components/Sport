import React from 'react';
import './Dashbord.css';  // Import the CSS for styling
import { LuUsers } from "react-icons/lu";
import { IoLogoDropbox } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  const totalUsers = 1500;
  const userIncrement = 5;  // Increment (positive) or decrement (negative)
  const percentageChange = (userIncrement / totalUsers) * 100;

  return (
    <>
    <div className='main_dash'>
      <h3>Dashboard</h3>
      <div className="dashboard">
        <div className="dashboard-box">
          <h3>Total Users</h3>
          <div className="dashboard-content">
            <div className='status'>
              <div className="user-stats">
                <p className="user-count">{totalUsers}</p>
              </div>  
              <div className='User_icon'>
                  <LuUsers/>
              </div>
            </div>  
              <div className="user-trend">
                <span className={userIncrement >= 0 ? 'increase' : 'decrease'}>
                  {userIncrement >= 0 ? '↑' : '↓'} {Math.abs(userIncrement)} users
                </span>
                <span className="percentage-change">
                  {userIncrement >= 0 ? '+' : '-'}{Math.abs(percentageChange).toFixed(2)}% (since yesterday)
                </span>
              </div>
          </div>
        </div>
        <div className="dashboard-box">
          <h3>Total Users</h3>
          <div className="dashboard-content">
            <div className='status'>
              <div className="user-stats">
                <p className="user-count">{totalUsers}</p>
              </div>  
              <div className='User_icon uic1'>
                  <IoLogoDropbox/>
              </div>
            </div>  
              <div className="user-trend">
                <span className={userIncrement >= 0 ? 'increase' : 'decrease'}>
                  {userIncrement >= 0 ? '↑' : '↓'} {Math.abs(userIncrement)} users
                </span>
                <span className="percentage-change">
                  {userIncrement >= 0 ? '+' : '-'}{Math.abs(percentageChange).toFixed(2)}% (since yesterday)
                </span>
              </div>
          </div>
        </div>
        <div className="dashboard-box">
          <h3>Total Users</h3>
          <div className="dashboard-content">
            <div className='status'>
              <div className="user-stats">
                <p className="user-count">{totalUsers}</p>
              </div>  
              <div className='User_icon uic2'>
                  <FaArrowTrendUp/>
              </div>
            </div>  
              <div className="user-trend">
                <span className={userIncrement >= 0 ? 'increase' : 'decrease'}>
                  {userIncrement >= 0 ? '↑' : '↓'} {Math.abs(userIncrement)} users
                </span>
                <span className="percentage-change">
                  {userIncrement >= 0 ? '+' : '-'}{Math.abs(percentageChange).toFixed(2)}% (since yesterday)
                </span>
              </div>
          </div>
        </div>
        <div className="dashboard-box">
          <h3>Total Users</h3>
          <div className="dashboard-content">
            <div className='status'>
              <div className="user-stats">
                <p className="user-count">{totalUsers}</p>
              </div>  
              <div className='User_icon uic3'>
                  <FaClockRotateLeft/>
              </div>
            </div>  
              <div className="user-trend">
                <span className={userIncrement >= 0 ? 'increase' : 'decrease'}>
                  {userIncrement >= 0 ? '↑' : '↓'} {Math.abs(userIncrement)} users
                </span>
                <span className="percentage-change">
                  {userIncrement >= 0 ? '+' : '-'}{Math.abs(percentageChange).toFixed(2)}% (since yesterday)
                </span>
              </div>
          </div>
        </div>
      </div>
      <div className='Graph'>
        <div className='grapg_pattern'>
          <img src='./item/img/Grap.png' alt='Graph_alt'></img>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;