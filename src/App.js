import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Sportnav/Navbar';
import UserSideRoutes from './components/UserSideRoutes';
import LoginPage from './components/Login/Login';
import Adminheader from './components/Adminpages/Adminheader'; 
import Adminsiderouts from './components/Adminsiderouts';
import SIgnup from './components/Signup/SIgnup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route to Redirect to Login */}
        <Route path="/" element={<Navigate to="/user" />} />

        {/* Public Route */}
        {/* <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SIgnup/>} /> */}

        {/* User-Specific Routes */}
        <Route
          path="/user/*"
          element={
            <>
              <Header /> {/* Common header for user */}
              <UserSideRoutes /> {/* User dashboard pages */}
            </>
          }
        />

        {/* Admin-Specific Routes */}
        <Route
          path="/admin/*"
          element={
            <>
              <Adminheader />
              <Adminsiderouts />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
