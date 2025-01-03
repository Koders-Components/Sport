import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Marketpro1 from './Ext/Marketpro/Marketpro1/Marketpro1';
import Parallax from './Ext/Parallaxeffect/Parallax';


const UserSideRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Marketpro1/>} />
        <Route path="/P1" element={<Parallax/>} />
    </Routes>
    </>
  );
};

export default UserSideRoutes;