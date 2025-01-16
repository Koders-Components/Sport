import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Space from './Mixpath/Space/Space';

const UserSideRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Space/>} />
    </Routes>
    </>
  );
};

export default UserSideRoutes;