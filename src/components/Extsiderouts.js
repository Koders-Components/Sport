import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Marketpro1 from './Ext/Marketpro/Marketpro1/Marketpro1';


const UserSideRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Marketpro1/>} />
    </Routes>
    </>
  );
};

export default UserSideRoutes;