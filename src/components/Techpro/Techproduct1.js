import React from 'react';
import './Techproduct1.css';

export default function Techproduct1() {
  return (
    <>
        <div className='techproduct1'>
            <div className='techproduct1_left'>
                <div className='explosion'>
                    <img src='/item/img/Explosion.png' alt="Boom_img" />
                </div>
                <div className='Leady_star'>
                    <img src='/item/img/Leadystar.png' alt="Boom_img" />
                </div>
                <div className='techproduct1_chils_top'>
                    01
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus. 
                    </p>
                </div>
                <div className='techproduct1_chils_bottom'>
                    <img src='/item/img/Blacleady.png' alt='blackleady_img'/>
                </div>
            </div>
            <div className='techproduct2_left'>
                <div className='bgblur'>
                    <img src='/item/img/Gradient_bg.png' alt="Boom_img" />
                </div>
                <p>
                    Create your design
                </p>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. 
                </span>
                <button type='submit'> Explore </button>
            </div>
            <div className='techproduct3_left'>
                <div className='white_star'>
                    <img src='/item/img/Whiteleady_star.png' alt="Boom_img" />
                </div>
                <div className='white_party'>
                    <img src='/item/img/Party.png' alt="Boom_img" /> 
                </div>
                <div className='techproduct1_chils_top'>
                    02
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus. 
                    </p>
                </div>
                <div className='techproduct1_chils_bottom'>
                    <img src='/item/img/Whiteleady.png' alt='blackleady_img'/>
                </div>
            </div>
        </div> 
    </>
  )
}
