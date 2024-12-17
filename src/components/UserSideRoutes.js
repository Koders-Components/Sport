import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Homedata';
import Truf from './Truf/Truf';
import Bought from './Bay/Bought';
import Banner from './Banner/Banner';

const UserSideRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Truf" element={<Truf/>} />
        <Route path="/Bought" element={<Bought/>} /> 
        <Route path="/Banner" element={<Banner/>} /> 
    </Routes>
    </>
  );
};

export default UserSideRoutes;
