import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Adminpages/Dashbord/Dashbord';
import Product from './Adminpages/Product/Product';

const UserSideRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/products" element={<Product/>} />
    </Routes>
    </>
  );
};

export default UserSideRoutes;
