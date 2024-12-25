import React, { useState } from 'react';
import './Truf1.css';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiCricket } from "react-icons/pi";
import { IoFootballOutline } from "react-icons/io5";
import { MdOutlineEditCalendar } from "react-icons/md";
import Slider from './Trufslider';

function Truf() {
  const [selectedImage, setSelectedImage] = useState('/item/img/Groundimg.png'); // Default image

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <>
      <div className='booking_main'>
        <div className='top_header'>
          <div className='top_header1'> 
            <div className='left_img'>
              <div className='left_child_img' onClick={() => handleImageClick('/item/img/Groundimg.png')}>
                <img src='/item/img/Groundimg.png' alt="Ground_img" />
              </div>
              <div className='left_child_img' onClick={() => handleImageClick('/item/img/Booking.png')}>
                <img src='/item/img/Booking.png' alt="Booking_img" />
              </div>
              <div className='left_child_img' onClick={() => handleImageClick('/item/img/Booking.png')}>
                <img src='/item/img/Booking.png' alt="Booking_img" />
              </div>
              <div className='left_child_img' onClick={() => handleImageClick('/item/img/Booking.png')}>
                <img src='/item/img/Booking.png' alt="Booking_img" />
              </div>
            </div>
            <div className='img_show'>
              <img src={selectedImage} alt="Selected_img" />
            </div>
            <div className='ground_info'>
                <div className='info_child1'>
                    <h2>Name of the turf</h2>
                    <p> ⭐⭐⭐⭐⭐ | <small style={{color:'gray'}}>5 Customer Review</small></p>
                    <div className='price_info'>
                        Rs. 2,000
                        <p>
                            Setting the bar as one of the loudest speakers in its 
                            class, the Kilburn is a compact, stout-hearted hero 
                            with a well-balanced audio which boasts a clear midrange 
                            and extended highs for a sound.
                        </p>
                    </div>
                    <div className='size_info'>
                        Size
                        <div className='size_boxes'>
                            <div className='size_box'>
                               <button type='submit'> Turf A:  600x600</button>
                            </div>
                            <div className='size_box'>
                                <button type='submit'> Turf B:  600x600</button>
                            </div>
                        </div>
                    </div>
                    <div className='Amenities_box'>
                        Amenities
                        <div className='Amenities_boxes'>
                            <div className='Amenities_box1'></div>
                            <div className='Amenities_box1'></div>
                            <div className='Amenities_box1'></div>
                            <div className='Amenities_box1'></div>
                        </div>
                    </div>
                    <div className='sports'>
                        Select Sports
                        <div className='select_sports'>
                            <div className='stype'>
                                <IoFootballOutline/>
                            </div>
                            <div className='stype'>
                                <PiCricket/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='info_child2'>
                    <div className='info_child_light'>    
                        <div className='info_child_light1'>
                            <MdKeyboardDoubleArrowRight/>
                        </div>
                        <div className='info_chils_light2'>
                        Book Now
                        </div>
                    </div>    
                </div>
            </div>
          </div> 
          <div className='top_header2'>
            Booking
            <div className='date_boxes'>
                <div className='date_picker'>
                    <div className='date_img'>
                        <MdOutlineEditCalendar/>
                    </div>
                </div>
                <div className='date_list'>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                    <div className='date_box'>
                        <div className='date_box_data'>
                            Sat<br/>23
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className='mid_body'>
            Time Frame
            <div className='time_boxs'>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
                <div className='time_box'>
                    09:00  pm
                </div>
            </div>
        </div>
        <div className='reviews'>
            <p>-Reviews</p>
            <Slider/>
        </div>
      </div>
    </>
  );
}

export default Truf;