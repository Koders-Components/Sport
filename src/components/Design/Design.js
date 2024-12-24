import React from 'react'
import './Design.css';

export default function Design() {
  return (
    <>
        <div className='delight_main'>
            <div className='delight_top'>
                <div className='delight_details'>
                    <span>
                        We create delightful designs  
                    </span>
                    <div className='delight_details_child'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum.
                        </p>
                        <button type='submit'>
                            Get started
                        </button>
                    </div>
                </div>
                <div className='delight_details2'>
                    <div className='delight_star'>
                        <img src="/item/img/Delight_star.png" alt="Delight_star" />
                    </div>
                    <div className='delight_star1'>
                        <img src="/item/img/Delight_star1.png" alt="Delight_star" />
                    </div>
                    <div className='delight_child'>
                        <div className='delight_child_img'>
                            <img src="/item/img/Delight_leady.png" alt="Delight_leady" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='delight_bottom'>
                <div className='delight_child'>
                    <p>4.5K</p>
                    <span>Lorem ipsum dolor sit amet </span>
                </div>
                <div className='delight_child'>
                    <p>12+</p>
                    <span>Lorem ipsum dolor sit amet </span>
                </div>
                <div className='delight_child'>
                    <p>6.9K</p>
                    <span>Lorem ipsum dolor sit amet </span>
                </div>
                <div className='delight_child'>
                    <p>4.9K</p>
                    <span>Lorem ipsum dolor sit amet </span>
                </div>
            </div>
        </div>
    </>
  )
}
