import React from 'react'
import './Space.css';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Space() {
  return (
    <div>
        <div className='main_space'>
            <div className='first_space'>
                <div className='first_space_left'>
                    <p>
                        Get More Done with whitepace
                    </p>
                    <span>
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </span>
                    <button type='submit'>
                        Try Whitepace free
                        <IoIosArrowRoundForward/>
                    </button>
                </div>
                <div className='first_space_right'>
                </div>
            </div>
            <div className='second_space'>
                <div className='second_top'>
                    <div className='second_top_left'>
                        <p>
                            Project Management
                        </p>
                        <span>
                            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.                      
                        </span>
                        <button type='submit'>
                            Get Started
                            <IoIosArrowRoundForward/>
                        </button>
                    </div>
                    <div className='second_top_right'></div>
                </div>
                <div className='second_bottom'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
