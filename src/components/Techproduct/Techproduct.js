import React from 'react'
import './Techproduct.css'
import { IoMdSunny } from "react-icons/io";
import { ImStarEmpty } from "react-icons/im";
import { IoEyeSharp } from "react-icons/io5";
import { IoEarthSharp } from "react-icons/io5";

export default function Techproduct() {
  return (
    <>
        <div className='tech_products'>
            <div className='tech_left'>
                <div className='tech_name_circle'>
                </div>
                <div className='tech_details'>
                    <span>THE eWatch with the newest microchip technology</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
                </div>
                <div className='butn'>
                    <button type='submit'> Order now </button>
                    <button type='submit'>Explore more</button>
                </div>
                <div className='tech_dtlbox'>
                    <div className='dtlchild1'>
                        <div className='child1_icon'>
                            <IoMdSunny/>
                        </div>
                        <div className='child1_dtl'>
                            Lorem ipsu dolor amet
                        </div>
                    </div>
                    <div className='dtlchild1'>
                        <div className='child1_icon'>
                            <ImStarEmpty/>
                        </div>
                        <div className='child1_dtl'>
                            Lorem ipsu dolor amet
                        </div>
                    </div>
                    <div className='dtlchild1'>
                        <div className='child1_icon'>
                            <IoEyeSharp/>
                        </div>
                        <div className='child1_dtl'>
                            Lorem ipsu dolor amet
                        </div>
                    </div>
                    <div className='dtlchild1'>
                        <div className='child1_icon'>
                            <IoEarthSharp/>
                        </div>
                        <div className='child1_dtl'>
                            Lorem ipsu dolor amet
                        </div>
                    </div>
                </div>
            </div>
            <div className='tech_right'>
                <div className='right_smallchild_box1'>
                    <img src='/item/img/Star.png' alt='watch_image'/>
                </div>
                <div className='right_smallchild1_box'>
                    <img src='/item/img/smallStar.png' alt='watch_image'/>
                </div>
                <div className='right_smallchild2_box'>
                    <img src='/item/img/smallStar.png' alt='watch_image'/>
                </div>
                <div className='watch_box_details'>
                    Award winning product
                </div>
                <div className='watch_box_details2'>
                    Ergonomic design
                </div>
                <div className='right_child_box1'>
                </div>
                <div className='right_child_box2'>
                    <img src='/item/img/Watch.png' alt='watch_image'/>
                </div>
                <div className='right_child_box3'>
                </div>
            </div>
        </div> 
    </>
  )
}