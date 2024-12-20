import React from 'react'
import './Bought.css';
import Slider from '../Sliderhole/Slid';
import { TbTruckDelivery } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import { IoWalletSharp } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

export default function Bought() {
  return (
    <>
      <div className='style_wraper'>
        <div className='style_left'>
            <div className='style_img'>
                <img src='/item/img/Slider_Photo.jpg' alt='SHOP_IMG'></img>
            </div>
            <div className='style_details'>
                NEW COLLECTION
                <div className='details'>
                    Meet New <br/>
                    Fashion Week
                </div>
                <div className='style_btn'>
                    <button type='submit'>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
        <div className='style_second'>
            <div className='style_img'>
                <img src='/item/img/Slider_Photo.jpg' alt='SHOP_IMG'></img>
            </div>
            <div className='style_details'>
                DEAL OF THE WEEK
                <div className='details'>
                    Multi-Brand <br/>
                    Store of Clothes
                </div>
                <div className='details1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, sed numquam. Neque culpa, ipsa, expedita rerum eos aspernatur amet minus laudantium voluptas delectus inventore fuga hic incidunt ab est quas.
                </div>
                <div className='style_btn'>
                    <button type='submit'>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
        <div className='style_third'>
            <div className='third_title'>
                All About Company
            </div>
            <div className='third_header'>
                Official Represantative of the world-famous clothing<br/>
                Brand Fashionee in Europe and the world
            </div>
            <div class="container">
                <div class="row gy-4">
                    <div class="col-md-6">
                        <div class="p-4 third_begin">
                                <h4 class="mb-3">The Beginning Of Our Journey</h4>
                                <p class="mb-4">
                                Subscribe to our email newsletter now and stay informed about the latest
                                updates. Subscribe to our email newsletter now and stay informed about the 
                                latest updates. Subscribe to our email newsletter now and stay informed 
                                about the latest updates. Subscribe to our email newsletter now and stay.
                                </p>
                            <div class="text-center mt-3">
                                <h5 class="mb-0"><span class="fw-bold display-6">5649 +</span></h5>
                                <p>Satisfied clients</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 third_begin2">
                    <div class="p-4 third_begin">
                            <div className='beginning_info'>   
                                <h4 class="mb-3">The Beginning Of Our Journey</h4>
                                <p class="mb-4">
                                Subscribe to our email newsletter now and stay informed about the latest
                                updates. Subscribe to our email newsletter now and stay informed about the 
                                latest updates. Subscribe to our email newsletter now and stay informed 
                                about the latest updates. Subscribe to our email newsletter now and stay.
                                </p>
                            </div>    
                            <div class="text-center mt-3">
                                <h5 class="mb-0"><span class="fw-bold display-6">5649 +</span></h5>
                                <p>Satisfied clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='style_fourth'>
            <div className='fourth_header'>
                NEW COLLECTIONS
            </div>
            <div className='fourth_title'>
                Featured Products
            </div>
            <div className='fourth_choice'>
                <div className='ch'>
                    <a href='/'>All</a>
                </div>
                <div className='ch'>
                    <a href='/'>Men</a>
                </div>
                <div className='ch'>
                    <a href='/'>Women</a>
                </div>
                <div className='ch'>
                    <a href='/'>Accessories</a>
                </div>
                <div className='ch'>
                    <a href='/'>New Arrivals</a>
                </div>
            </div>
            <div className='fourth_slider'>
                <Slider/>
            </div>
            <div className='fourth_btn'>
                <button type='submit'>
                    See All Products
                </button>
            </div>
        </div>
        <div className='style_five'>
            <div className='cards_five'>
                <div className='card_five'>
                    <div className='card_img'>
                        <TbTruckDelivery/>
                    </div>
                    <div className='card_data'>
                        Free Shipping
                    </div>
                    <div className='card_line'></div>
                    <div className='card_details'>
                        non aliqua reprehenderit reprehenderit
                        culpa laboris nulla minim anim velit 
                    </div>
                </div>
                <div className='card_five'>
                    <div className='card_img'>
                        <LuPhoneCall/>
                    </div>
                    <div className='card_data'>
                        Free Shipping
                    </div>
                    <div className='card_line'></div>
                    <div className='card_details'>
                        non aliqua reprehenderit reprehenderit
                        culpa laboris nulla minim anim velit 
                    </div>
                </div>
                <div className='card_five'>
                    <div className='card_img'>
                        <IoWalletSharp/>
                    </div>
                    <div className='card_data'>
                        Free Shipping
                    </div>
                    <div className='card_line'></div>
                    <div className='card_details'>
                        non aliqua reprehenderit reprehenderit
                        culpa laboris nulla minim anim velit 
                    </div>
                </div>
            </div>
        </div>
        <div className='style_six'>
        <div className='style_six1'>
            <div className="accordion">
                {/* Accordion Item 1 */}
                <div className="accordion-item">
                <input type="radio" id="item1" name="accordion" defaultChecked />
                <label className="accordion-title" htmlFor="item1">
                    Can Linen Be Worn In March? Skin In July?
                </label>
                <div className="accordion-content">
                    <p>
                        Esse ipsum deserunt aliquip tempor in occaecat nostrud excepteur sunt eiusmod commodo amet. Eiusmod exercitation ad elit et consequat magna. Qui nostrud ipsum laborum et eu pariatur.
                        Esse ipsum deserunt aliquip tempor in occaecat nostrud excepteur sunt eiusmod commodo amet. Eiusmod exercitation ad elit et consequat magna. Qui nostrud ipsum laborum et eu pariatur.  
                    </p>
                </div>
                </div>
                {/* Accordion Item 2 */}
                <div className="accordion-item">
                <input type="radio" id="item2" name="accordion" />
                <label className="accordion-title" htmlFor="item2">
                    How To Dress To Be On A Good Account At Work?
                </label>
                <div className="accordion-content">
                    <p>Find tips on dressing professionally while maintaining comfort and style.</p>
                </div>
                </div>
                {/* Accordion Item 3 */}
                <div className="accordion-item">
                <input type="radio" id="item3" name="accordion" />
                <label className="accordion-title" htmlFor="item3">
                    How To Care For Imitation Pearls And Jewelry In General?
                </label>
                <div className="accordion-content">
                    <p>Discover practical advice for preserving the quality of imitation pearls.</p>
                </div>
                </div>
                {/* Accordion Item 4 */}
                <div className="accordion-item">
                <input type="radio" id="item4" name="accordion" />
                <label className="accordion-title" htmlFor="item4">
                    What Looks Good In An Informal Work Environment?
                </label>
                <div className="accordion-content">
                    <p>Learn how to balance casual and professional wear effortlessly.</p>
                </div>
                </div>
                {/* Accordion Item 5 */}
                <div className="accordion-item">
                <input type="radio" id="item5" name="accordion" />
                <label className="accordion-title" htmlFor="item5">
                    Is Everything Still In Mini Fashion? How Fashionable Is The Past Fashion?
                </label>
                <div className="accordion-content">
                    <p>Learn how to balance casual and professional wear effortlessly.</p>
                </div>
                </div>
                {/* Accordion Item 6 */}
                <div className="accordion-item">
                <input type="radio" id="item6" name="accordion" />
                <label className="accordion-title" htmlFor="item6">
                    How To Dress Fashionably With Only A Limited Amount?
                </label>
                <div className="accordion-content">
                    <p>Learn how to balance casual and professional wear effortlessly.</p>
                </div>
                </div>
            </div>
        </div>
            <div className='style_six2'>
                <div className='style_child1'>
                    <div className='child_header'>
                        Newsletter
                    </div>
                    <div className='child_data'>
                        Subscribe to be first to here 
                        deals,offers and upcoming drops
                    </div>
                    <div className='child_input'>
                        <input type='text' placeholder='Enter your email'/>
                    </div>
                    <div className='child_btn'>
                        <button type='submit'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <br/>
                <div className='style_child2'>
                    <div className='child2_border'>
                        <div className='chlid2_header'>
                            S E A S O N
                        </div>
                        <div className='chlid2_title'>
                            SALE
                        </div>
                        <div className='chlid2_data'>
                            non aliqua reprehenderit reprehenderit
                            culpa laboris nulla 
                        </div>
                        <div className='chlid_data2'>
                            <div className='chlid_data2_line'></div>
                            <div className='chlid_data2_data'>
                                Shop now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='style_seven'>
            <div className='seven_top'>
                <div className='seven_child1'>
                    STYLIAN
                    <div className='seven_child_small1'>
                        non aliqua reprehenderit reprehenderit
                        culpa laboris nulla erit reprehenderit
                        culpa laboris nulla 
                    </div>
                    <div className='seven_child_line'></div>
                    <div className='seven_child_data'>
                        Find Us Here:
                        <div className='seven_child_list'>
                            <a href='/'>FB - </a>
                            <a href='/'>TW - </a>
                            <a href='/'>INS - </a>
                            <a href='/'>PT </a>
                        </div>
                    </div>
                </div>
                <div className='seven_child2'>
                    About
                    <div className='seven_child2_links'>
                        <a href='/'>- About us</a>
                        <a href='/'>- Collection</a>
                        <a href='/'>- Shop</a>
                        <a href='/'>- Blog</a>
                        <a href='/'>- Contact us</a>
                    </div>
                </div>
                <div className='seven_child3'>
                    Useful Links
                    <div className='seven_child3_links'>
                        <a href='/'>- Privacy Policy</a>
                        <a href='/'>- Terms of use</a>
                        <a href='/'>- Support</a>
                        <a href='/'>- Shipping Details</a>
                        <a href='/'>- FAQs</a>
                    </div>
                </div>
                <div className='seven_child4'>
                    Newsletter
                    <div className='seven_child4_data'>
                        Subscribe to be first to here 
                        deals,offers and upcoming drops
                        offers and upcoming Collection.
                    </div>
                    <div className='seven_child4_input'>
                        <input type='text' placeholder='Enter your email'/>
                        <button type='submit'>
                            <FiSend/>
                        </button>
                    </div>
                    <div className='seven_child4_input_line'></div>
                </div>
            </div>
            <div className='seven_mid_line'></div>
            <div className='seven_bottom'>
                <h6>@ All right reserved. STYLIAN 2022</h6>
                <h6>Design by Lgnacio Prados</h6>
            </div>
        </div>
      </div>
    </>
  )
}