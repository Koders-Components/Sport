import React from 'react'
import './Space.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuCircleCheckBig } from "react-icons/lu";
import Slider from './Spaceslider';

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
                    <div className='second_bottom_left'>
                        <img src="/item/img/Working_mix.png" alt="" />
                    </div>
                    <div className='second_bottom_right'>
                        <p>
                            Work together   
                        </p>
                        <span>
                            With whitepace, share your notes with your colleagues and collaborate on them.
                            You can also publish a note to the internet and share the URL with others.
                        </span>
                        <button type='submit'>
                            Try it now
                            <IoIosArrowRoundForward/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='third_space'>
                <div className='third_space_left'>
                    <p>
                        Use as Extension 
                    </p>
                    <span>
                        Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </span>
                    <button type='submit'>
                        Let’s Go
                        <IoIosArrowRoundForward/>
                    </button>
                </div>
                <div className='third_space_right'></div>
            </div>
            <div className='fourth_space'>
                <div className='fourth_space_left'>
                </div>
                <div className='fourth_space_right'>
                    <p>
                        Customise it
                        to your needs
                    </p>
                    <span>
                        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </span>
                    <button type='submit'>
                        Let’s Go
                        <IoIosArrowRoundForward/>
                    </button>
                </div>
            </div>
            <div className='five_space'>
                <div className='five_space_top'>
                    <p>
                        Choose Your Plan 
                    </p>
                    <span>
                        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.   
                    </span>
                </div>
                <div className='five_space_bottom'>
                    <div className='five_bottom_card1'>
                        <div className='card_child1'>
                            <h5>Free</h5>
                            <h2>$0</h2>
                            <h6>Capture ideas and find them quickly</h6>
                        </div>
                        <div className='card_child2'>
                            <p><LuCircleCheckBig/> Sync unlimited devices</p>
                            <p><LuCircleCheckBig/> 10 GB monthly uploads</p>
                            <p><LuCircleCheckBig/> 200 MB max. note size</p>
                            <p><LuCircleCheckBig/> Customize Home dashboard and access extra widgets </p>
                            <p><LuCircleCheckBig/> Connect primary Google Calendar account </p>
                            <p><LuCircleCheckBig/> Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                        <button className='btnstart' type='submit'>
                            Get Started
                        </button>
                    </div>
                    <div className='five_bottom_card1'>
                        <div className='card_child1'>
                            <h5>Personal</h5>
                            <h2>$11.99</h2>
                            <h6>Capture ideas and find them quickly</h6>
                        </div>
                        <div className='card_child2'>
                            <p><LuCircleCheckBig/> Sync unlimited devices</p>
                            <p><LuCircleCheckBig/> 10 GB monthly uploads</p>
                            <p><LuCircleCheckBig/> 200 MB max. note size</p>
                            <p><LuCircleCheckBig/> Customize Home dashboard and access extra widgets </p>
                            <p><LuCircleCheckBig/> Connect primary Google Calendar account </p>
                            <p><LuCircleCheckBig/> Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                        <button className='btnstart' type='submit'>
                            Get Started
                        </button>
                    </div>
                    <div className='five_bottom_card1'>
                        <div className='card_child1'>
                            <h5>Organization</h5>
                            <h2>$49.99</h2>
                            <h6>Capture ideas and find them quickly</h6>
                        </div>
                        <div className='card_child2'>
                            <p><LuCircleCheckBig/> Sync unlimited devices</p>
                            <p><LuCircleCheckBig/> 10 GB monthly uploads</p>
                            <p><LuCircleCheckBig/> 200 MB max. note size</p>
                            <p><LuCircleCheckBig/> Customize Home dashboard and access extra widgets </p>
                            <p><LuCircleCheckBig/> Connect primary Google Calendar account </p>
                            <p><LuCircleCheckBig/> Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                        <button className='btnstart' type='submit'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <div className='six_space'>
                <div className='six_space_top'>
                    <div className='six_top_child1'>
                        <p>
                            Your work, everywhere you are
                        </p>
                        <span>
                            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </span>
                    </div>
                    <button type='submit'>
                        Try Taskey
                        <IoIosArrowRoundForward/>
                    </button>
                </div>
            </div>
            <div className='seven_space'>
                <div className='seven_left'>
                    <p>
                        100% your data
                    </p>
                    <span>
                        The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                    </span>
                    <button type='submit'>
                    Read more <IoIosArrowRoundForward/>
                    </button>
                </div>
                <div className='sevrn_right'>
                    <img src="/item/img/Yourdata.png" alt="" />
                </div>
            </div>
            <div className='eight_space'>
                <div className='eight_space_top'>
                    Our sponsors
                </div>
                <div className='eight_space_bottom'>
                    <div className='apple'>
                        <a href="https://www.apple.com/in/app-store/">
                            <img src="/item/img/Apple.png" alt="" />
                        </a>
                    </div>
                    <div className='microsoft'>
                        <a href="https://www.microsoft.com/en-in">
                            <img src="/item/img/Microsoft.png" alt="" />
                        </a>
                    </div>
                    <div className='slack'>
                        <a href="https://slack.com/intl/en-in">
                            <img src="/item/img/Slack.png" alt="" />
                        </a>    
                    </div>
                    <div className='google'>
                        <a href="https://workspace.google.com/intl/en_in/lp/sites/?utm_source=google&utm_medium=cpc&utm_campaign=1707696-Workspace-APAC-IN-en-BKWS-BRO-LV-Hybrid&utm_content=text-ad-none-none-DEV_c-CRE_663185814376-ADGP_Hybrid%20%7C%20BKWS%20-%20BRO%20%7C%20Txt-Sites-N%2FA-KWID_43700080094448605-kwd-308334874&userloc_9062189-network_g=&utm_term=KW_google%20website&gad_source=1&gclid=Cj0KCQiA7NO7BhDsARIsADg_hIY_ATYxUyt_aDPpSLZyv7u6MqhhndGGZh3k6AHaUmXglCCOKb-k_x0aAgfjEALw_wcB&gclsrc=aw.ds">
                            <img src="/item/img/Google.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='nine_space'>
                <div className='nine_space_left'>
                    <img src="/item/img/Apps.png" alt="" />
                </div>
                <div className='nine_space_right'>
                    <p>
                        Work with Your Favorite Apps Using whitepace
                    </p>
                    <span>
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </span>
                    <button type='submit'>
                        Read more<IoIosArrowRoundForward/>
                    </button>
                </div>
            </div>
            <div className='ten_space'>
                <div className='ten_space_top'>
                    What Our Clients Says
                </div>
                <div className='ten_space_bottom'>
                    <Slider/>
                </div>
            </div>
            <div className='eleven_space'>
                <div className='eleven_head'>
                    <p>
                        Try Whitepace today
                    </p>
                    <span>
                        Get started for free.
                        Add your whole team as your needs grow.
                    </span>
                    <button type='submit'>
                        Try Taskey free<IoIosArrowRoundForward/>
                    </button>
                    <p className='contact_sales'>
                        On a big team? Contact sales
                    </p>
                    <div className='operating_systems'>
                        <div className='os'>
                            <img src="/item/img/Apple1.png" alt="" />
                        </div>
                        <div className='os'>
                            <img src="/item/img/Window.png" alt="" />
                        </div>
                        <div className='os'>
                            <img src="/item/img/Android.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='main_footer_cont'>
                    <div className='footer_top'>

                    </div>
                    <hr/>
                    <div className='footer_bottom'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
