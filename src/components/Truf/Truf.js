import React, { useState } from 'react';
import './Truf.css';
import { TbFilterSearch } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Truf() {
  const [startDate, setStartDate] = useState(null);

  const turfs = [
    { id: 1, name: 'Venue name', photo: '/item/img/Booking.png', location: 'Vaghodia Rd, Vadodara', price: '$200.00/Hrs.', rating: 4.5 },
  ];  

  return (
    <>
      <div className='main_wraper'>
        {/* Left Container */}
        <div className='containerleft'>
          {/* Filter Section */}
          <div className='firstbox'>
            <div className='Filter'>Filter</div>
            <div className='filterimg'>
              <TbFilterSearch />
            </div>
          </div>

          {/* Date Section */}
          <div className='secondbox'>
            <div className='child'>Date</div>
            <div className='date_picker'>
              <div className="date-picker">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="DD/MM/YYYY"
                />
              </div>
              <div className='to'>to</div>
              <div className="date-picker">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="DD/MM/YYYY"
                />
              </div>
            </div>
          </div>

          {/* Time Section */}
          <div className='thiredbox'>
            <div className='child'>Time Available</div>
            <div className='date_picker'>
              <div className="date-picker">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="DD/MM/YYYY"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className='containerright'>
          <div className='top'>
            <div className='Turf_booking'>Turf Booking</div>
            <div className='search'>
              <div className='search_bar'>
                <input type='text' placeholder='Search here' />
              </div>
              <div className='search_img'>
                <CiSearch />
              </div>
            </div>
            <div className='choice'>
              <div className='firstch'><a href='/'>New</a></div>
              <div className='secondch'><a href='/'>Recommended</a></div>
            </div>
          </div>

          {/* Turf List */}
          <div className='bottom'>
            <div className="turf-list">
              {turfs.map((turf) => (
                <div key={turf.id} className="turf-card">
                  <img src={turf.photo} alt={turf.name} className="card_photo" />
                  <div className="turf-info">
                    <div className='turf_information'>
                      <div className='name'>
                        {turf.name}<br />
                        <span>{turf.location}</span>
                      </div>
                      <div className='star_info'>
                        <p>{turf.rating} ⭐ / (200)</p>
                      </div>
                    </div>
                    <div className='Price'>
                      <p>{turf.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
