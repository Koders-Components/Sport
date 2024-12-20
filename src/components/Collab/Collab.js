import React from 'react'
import './Collab.css';
import { FaHeart } from "react-icons/fa";

export default function Collab() {
  return (
    <>
        <div className='collab_main'>
          <div className='collab_left'>
              <div className='collab_left1'>
                  <p>
                    We collaborate to build digital experience  
                  </p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.
                  </span>
                  <button type='submit'>Get started</button>
              </div>
              <div className='collab_left2'>
                <div className='collab_left_child'>
                    <div className='heart_icon'>
                      <FaHeart/>
                    </div>
                    <div className='icon_details'>
                      Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.
                    </div>
                </div>
                <div className='collab_left_child'>
                    <div className='heart_icon2'>
                      <FaHeart/>
                    </div>
                    <div className='icon_details'>
                      Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.
                    </div>
                </div>
                <div className='collab_left_child'>
                    <div className='heart_icon3'>
                      <FaHeart/>
                    </div>
                    <div className='icon_details'>
                      Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.
                    </div>
                </div>
              </div>
          </div>
          <div className='collab_right'>
            <div className='collab_border'>
              <div className='collab_img'>
                <img src="/item/img/collab_img.png" alt="collab_img" />
              </div>
            </div>
          </div>  
        </div> 
    </>
  )
}
