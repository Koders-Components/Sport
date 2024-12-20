import React from 'react'
import './Fooddish.css';

export default function Fooddish() {
  return (
    <>
        <div className='fooddish_main'>
            <div className='food_top'>
                <div className='food_details'>
                    <p>
                        A place you 
                        eat healthy
                    </p>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer 
                        facilisi eget. Lorem ipsum dolor.
                    </span>
                    <button type='submit'>
                        Explore the menu
                    </button>
                </div>
                <div className='foodsection_img'>
                    <img src="/item/img/Fooddish.png" alt="Fooddish_img" />
                </div>
            </div>
            <div className='food_bottom'>
                <div className='veggies_container'>
                    <div className='Avacado_img'>
                        <img src='/item/img/Avacado.png' alt="Avacado" />
                    </div>
                    <div className='Lemon_img'>
                        <img src='/item/img/Lemon.png' alt="Lemon" />
                    </div>
                    <div className='carrot_img'>
                        <img src='/item/img/Carrot.png' alt="carrot" />
                    </div>
                </div>
                <div className='veggies_details'>
                    <div className='veg_headline'>
                        <div className='black_line'></div>
                        <div className='veg_heading'>
                            Chef ABC
                        </div>
                    </div>
                    <div className='heading_dtl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper 
                    </div>
                    <div className='veggitable_img'>
                        <div className='Tomato_img'>
                            <img src='/item/img/Tomato.png' alt="tomato" />
                        </div>
                        <div className='Brokoly_img'>
                            <img src='/item/img/Brocly.png' alt="brocly" />
                        </div>
                        <div className='Guava_img'>
                            <img src='/item/img/Guava.png' alt="guava" />
                        </div>
                        <div className='Kaju_img'>
                            <img src='/item/img/Kaju.png' alt="kaju" />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}
