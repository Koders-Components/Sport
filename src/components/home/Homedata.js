import React from 'react'
import './Home.css';
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { TfiSearch } from "react-icons/tfi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { TbClockHour9Filled } from "react-icons/tb";
import { IoWalletSharp } from "react-icons/io5";
import { Ri24HoursLine } from "react-icons/ri";
import { BsQrCode } from "react-icons/bs";
import { BsAndroid2 } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Slider from '../Slider/Slider';

export default function home() {
  return (
    <>
      <div className='homecont'>
        <div className='contfirst'>
          <div className='firstcont'>
              <div className='hedings'>
                  <span>MY GROUND</span>
                  <span className='dtl'>MY GAME</span>
              </div>
              <div className='searchbox'>
                  <div className='location'>
                    <div className='locationimg'>
                      <CiLocationOn/>
                    </div>
                    <div className='locationdtl'>
                      <span>Location</span>
                      <p>Ankleshwar,Gujarat</p>
                    </div>
                  </div>
                  <div className='locationdetail'>
                    <div className='locationimg'>
                        <CiCalendar/>
                    </div>
                    <div className='locationdtl'>
                      <span>Date</span>
                      <p>01-01-2003</p>
                    </div>
                  </div>
                  <div className='searchbar'>
                      <TfiSearch/>
                  </div>
              </div>
              <div className='paragraph'>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus, at atque quam rerum illo tempore aliquid quos cumque velit impedit officiis neque sint deleniti nulla nostrum facilis. Quis, atque?</span>
              </div>
              <div className='storeadj'>
                  <div className='store'>
                    <div className='storeimg'>
                      <IoLogoGooglePlaystore/>
                    </div>
                    <div className='storenam'>
                      <span>get it on</span>
                      <span><a href='https://play.google.com/store/games?hl=en'>Google Play</a></span>
                    </div>
                  </div>
                  <div className='store'>
                    <div className='storeimg'>
                      <FaApple/>
                    </div>
                    <div className='storenam'>
                      <span>get it on</span>
                      <span><a href='https://www.apple.com/in/app-store/'>Google Play</a></span>
                    </div>
                  </div>
              </div>
          </div>
          <div className='secondcont'>
            <div className='contdtails'>
                <span> SPORT </span>
            </div>
          </div>
        </div>
        <div className='contsecond'>
          <div className='contsecheadadj'>
            <div className='contsechead'>
              <span className='exchangcolor'>
                Exclusive Benefits
              </span>
              <br/>
              <span>Of SportAstra</span>
            </div>
            <div className='sportdtl'>
              <p>
                Subscribe to Our email newsletter now 
                and stay informed about the latest updates.
              </p>
            </div>
          </div>
          <div className='contboxes'>
            <div className='contbox'>
              <div className='boximg'>
                <TbClockHour9Filled/>
              </div>
              <div className='boxtype'>
                  <span>Fast Booking</span>
              </div>
              <div className='boxdtl'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero consectetur accusamus esse quidem expedita velit ut culpa ratione, consequuntur perspiciatis.</p>
              </div>
            </div>
            <div className='contbox'>
              <div className='boximg'>
                <IoWalletSharp/>
              </div>
              <div className='boxtype'>
                  <span>Fast Booking</span>
              </div>
              <div className='boxdtl'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero consectetur accusamus esse quidem expedita velit ut culpa ratione, consequuntur perspiciatis.</p>
              </div>
            </div>
            <div className='contbox'>
              <div className='boximg'>
                <Ri24HoursLine/>
              </div>
              <div className='boxtype'>
                  <span>Fast Booking</span>
              </div>
              <div className='boxdtl'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero consectetur accusamus esse quidem expedita velit ut culpa ratione, consequuntur perspiciatis.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='contthird'>
          <div className='contthirdleft'>
            <div className='thirdconthead'>
                <p>Download <span>SportsAstra App</span>Today</p>
            </div>
            <div className='thirdcont'>
              <p>5 bank accounts,5 apps?
                not anymore. Connect your other bank account then.</p>
            </div>
            <div className='useradj'>
              <div className='useingdtl'>
                  <div className='usecount'>
                    <span>20 Million+</span>
                  </div>
                  <div className='usedtl'>
                    <span> Active user </span>
                  </div>
              </div>
              <div className='useingdtl'>
                  <div className='usecount'>
                    <span>20+</span>
                  </div>
                  <div className='usedtl'>
                    <span> Status </span>
                  </div>
              </div>
              <div className='useingdtl'>
                  <div className='usecount'>
                    <span>700+</span>
                  </div>
                  <div className='usedtl'>
                    <span> Vendors </span>
                  </div>
              </div>
            </div>              
          </div>
          <div className='contthirdright'>
              <div className='appdtl'>
                <div className='appdtl1'>
                  <div className='appios'>
                    <span>For ioS</span>
                  </div>
                  <div className='appios15'>
                    <span>ioS +15</span>
                  </div>
                  <button type='Submit'> Download App </button>
                  <div className='appqr'>
                    <BsQrCode/>
                  </div>
                </div>
                <div className='applogo'>
                  <div className='logoapp'>
                    <FaApple/>
                  </div>
                </div>
              </div>
              <div className='appdtl'>
                <div className='appdtl1'>
                  <div className='appios'>
                    <span>For ioS</span>
                  </div>
                  <div className='appios15'>
                    <span>ioS +15</span>
                  </div>
                  <button type='Submit'> Download App </button>
                  <div className='appqr'>
                    <BsQrCode/>
                  </div>
                </div>
                <div className='applogo'>
                  <div className='logoapp'>
                    <BsAndroid2/>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='contfour'>
          <div className='conttop'>
            <div className='contfourt_dtl'>
                <div className='cont_dtl'>
                    <p>-Best Features</p> 
                </div>
                <div className='cont_dtl1'>
                  <p>key Feature of <span>SportsAstra</span> App</p>
                </div>
            </div>
            <div className='cont_dtlright'>
              <MdLocationOn/>
            </div>
          </div>
        </div>
        <div className='contfive'>
          <div className='hovercards'>
            <div className='hovercard'>
                <img src='./item/img/Slider_photo.jpg' alt='First_img'/>
            </div>
            <div className='hovercard'>
                <img src='./item/img/Slider_photo.jpg' alt='First_img'/>
            </div>
            <div className='hovercard'>
                <img src='./item/img/Slider_photo.jpg' alt='First_img'/>
            </div>
          </div>
        </div>
        <div className='contsix'>
          <div className='contsixhead'>-- Reviews</div>
          <div className='contsixhead1'>
              <p>
                Our Customer <span>Reviews</span> 
              </p>
          </div>
          <div className='slider'>
              <Slider/>
          </div>
          <div className='download_box'>
            <div className='headline'>
                <p> Find and Enjoy Your Perfect Ground For Your Game</p>
                <span> Download The App Now! </span>
            </div>
            <div className='headline3'>
              <p> Subscribe to our email newsletter now and stay informed about the latest updates </p>
            </div>
            <div className='storeadj'>
                  <div className='store'>
                    <div className='storeimg'>
                      <IoLogoGooglePlaystore/>
                    </div>
                    <div className='storenam'>
                      <span>get it on</span>
                      <span><a href='https://play.google.com/store/games?hl=en'>Google Play</a></span>
                    </div>
                  </div>
                  <div className='store'>
                    <div className='storeimg'>
                      <FaApple/>
                    </div>
                    <div className='storenam'>
                      <span>get it on</span>
                      <span><a href='https://www.apple.com/in/app-store/'>Google Play</a></span>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div className='footer'>
          <div className='footerfirst'>
            <div className='footerimmg'>
              <div className='footerimg'></div>
              <div className='footerimgnm'>
                <p>SportAstra</p>
              </div>
            </div>
            <div className='footercont'>
              <p> Subscribe to our email newsletter now and stay informed about the latest updates </p>
            </div>
            <div className='footercontimg'>
              <div className='footerimg'></div>
              <div className='footerimg'></div>
              <div className='footerimg'></div>
              <div className='footerimg'></div>
              <div className='footerimg'></div>
            </div>
          </div>
          <div className='footersecond'>
            <div className='footercom'>
              <p>Company</p>
            </div>
            <div className='footercom1'>
              <p><a href='/'>Home</a></p>
              <p><a href='/'>Features</a></p>
              <p><a href='/'>Reviwes</a></p>
              <p><a href='/'>About us</a></p>
              <p><a href='/'>Contect us</a></p>
            </div>
          </div>
          <div className='footerthired'>
            <div className='footercom'>
              <p>Contact</p>
            </div>
            <div className='footercom1'>
              <p><a href='tel:01321545646'>0000000000</a></p>
              <p><a href='mailto:test@gmail.com'>Features@gmail.com</a></p>
              <p>abhiguleriya@gmail.com</p>
              <p>Address 1</p>
              <p>Address 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
