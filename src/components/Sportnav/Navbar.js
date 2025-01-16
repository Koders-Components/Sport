import React, { useState } from 'react';
import './Header.css';
import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/Login'); // Redirects to the Login page
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>
      <div className='containermain'>
        <div className='containerhead'>
          <div className='logoname'>
            <div className='logo sportnav'>
              <FaLocationDot />
            </div>
            <div className='lname'>
              <p>SPORTASTER</p>
            </div>
          </div>
          <button className="menu_toggle" onClick={toggleMenu}>
            &#9776; {/* Three horizontal lines (hamburger icon) */}
          </button>
          <div className={`menubtn ${isMenuOpen ? 'open' : ''}`}>
            <div className='mmenu'>
              <div className='menu'><Link className='head' to='/user'>Home</Link></div>
              <div className='menu'><Link className='head' to='/user/Truf'>Turf</Link></div>
              <div className='menu'><Link className='head' to='/user/Bought'>Term & Condition</Link></div>
              <div className='menu'><Link className='head' to='/user/Techpro'>Techpro</Link></div>
              <div className='menu'><Link className='head' to='/user/Techpro1'>Techpro1</Link></div>
              <div className='menu'><Link className='head' to='/user/Fooddish'>Fooddish</Link></div>
              <div className='menu'><Link className='head' to='/user/Collab'>Collab</Link></div>
              <div className='menu'><Link className='head' to='/user/Design'>Design</Link></div>
              <div className='menu'><Link className='head' to='/user/Invoice'>Invoice</Link></div>
              <div className='btn'>
                <button type='button' onClick={handleBookNow}>Login</button>
              </div>
            </div>
          </div>
        </div>
        <div className='greenline'>
        </div>
      </div>
    </>
  );
}