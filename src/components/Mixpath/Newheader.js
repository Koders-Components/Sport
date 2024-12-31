import React from 'react'
// import { Link } from 'react-router-dom'
import './Newhead.css';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Newheader() {
  return (
    <div className='space_main'>
        <div className='space_logo_name'>
            <div className='space_logo'>
                <img src="/item/img/Space.png" alt="" />
            </div>
            <h3>Prosperix</h3>
        </div>
        <div className='space_head_btn'>
            <div className='space_header'>
                <div className="dropdown">
                    <button className="dropbtn">
                    Product <span className="arrow">▼</span>
                    </button>
                    <div className="dropdown-content">
                    <a href="#feature1">Feature 1</a>
                    <a href="#feature2">Feature 2</a>
                    <a href="#feature3">Feature 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                    Solution <span className="arrow">▼</span>
                    </button>
                    <div className="dropdown-content">
                    <a href="#solution1">Solution 1</a>
                    <a href="#solution2">Solution 2</a>
                    <a href="#solution3">Solution 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                    Resources <span className="arrow">▼</span>
                    </button>
                    <div className="dropdown-content">
                    <a href="#resource1">Resource 1</a>
                    <a href="#resource2">Resource 2</a>
                    <a href="#resource3">Resource 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                    Pricing <span className="arrow">▼</span>
                    </button>
                    <div className="dropdown-content">
                    <a href="#plan1">Plan 1</a>
                    <a href="#plan2">Plan 2</a>
                    <a href="#plan3">Plan 3</a>
                    </div>
                </div>
            </div>
            <div className='space_btn'>
                <div className='sbtn1'>
                    <button type='submit'>Login</button>
                </div>
                <div className='sbtn2'>
                    <button type='submit'>
                        Try Whitepace free 
                        <IoIosArrowRoundForward/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
