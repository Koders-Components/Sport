import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Homedata';
import Truf from './Truf/Truf';
import Bought from './Bay/Bought';
import Techproduct from './Techproduct/Techproduct';
import Techproduct1 from './Techpro/Techproduct1';
import Fooddish from './Fooddish/Fooddish';
import Collab from './Collab/Collab';
import Design from './Design/Design';
import Invoice from './Invoice/Invoice';
// import Banner from './Banner/Banner';

const UserSideRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Truf" element={<Truf/>} />
        <Route path="/Bought" element={<Bought/>} /> 
        {/* <Route path="/Banner" element={<Banner/>} />  */}
        <Route path="/Techpro" element={<Techproduct/>} />         
        <Route path="/Techpro1" element={<Techproduct1/>} />
        <Route path="/Fooddish" element={<Fooddish/>} />
        <Route path="/Collab" element={<Collab/>} />
        <Route path="/Design" element={<Design/>} />
        <Route path="/Invoice" element={<Invoice/>} />
    </Routes>
    </>
  );
};

export default UserSideRoutes;
