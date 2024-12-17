import React from 'react'
import './Product.css';
import Slider from '../Product/Slider';

export default function Product() {
    const images = [
        './item/img/Slider_photo.jpg',
      ];
  return (
    <>
        <div className='product_main'>
            <h3>Products</h3>
            <div className='Product_slider'>
                <Slider images={images}/>
            </div>
        </div>
    </>
  )
}
