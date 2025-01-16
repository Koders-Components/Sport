import React from 'react'
import './Extheader.css';
import { Link } from 'react-router-dom';

export default function Extheader() {
  return (
    <div className='sharmarket_Header'>
        <div className='header_logo'>
            <h3>Prosperix</h3>
        </div>
        <div className='header_type'>
            <div className='head_list'><Link className='middle' to='/ext'>Home</Link></div>
            <div className='head_list'><Link className='middle' to='/ext/P1'>Service</Link></div>
            <div className='head_list'><Link className='middle' to='/'>Contact</Link></div>
            <div className='head_list'><Link className='middle' to='/'>Help</Link></div>
        </div>
        <div className='header_btn'>
            <div className='btn1'>
                <button type='submit'>Sign in</button>
            </div>
            <div className='btn2'>
                <button type='submit'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
