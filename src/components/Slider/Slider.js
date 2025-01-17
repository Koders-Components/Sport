import React, { useState } from 'react';
import './Slider.css'; // Include a CSS file for styling

const Slider = () => {
  const data = [
    {
      id: 1,
      img: './item/img/Slider_photo.jpg',
      name: 'John Doe',
      rating: 5,
      descriptor: 'Satisfied app user',
      review: 'This app is amazing! It has helped me organize my life better.'
    },
    {
      id: 2,
      img: './item/img/Slider_photo.jpg',
      name: 'Jane Smith',
      rating: 4,
      descriptor: 'Happy app user',
      review: 'Great app with useful features. Highly recommend!'
    },
    {
      id: 3,
      img: './item/img/Slider_photo.jpg',
      name: 'Alice Brown',
      rating: 5,
      descriptor: 'Excited app user',
      review: 'The app exceeded my expectations. It is fantastic!'
    },
    {
      id: 4,
      img: './item/img/Slider_photo.jpg',
      name: 'Bob Johnson',
      rating: 3,
      descriptor: 'Neutral app user',
      review: 'The app is okay, but it could use some improvements.'
    },
    {
      id: 5,
      img: './item/img/Slider_photo.jpg',
      name: 'Emily Davis',
      rating: 5,
      descriptor: 'Satisfied app user',
      review: 'Absolutely love it! It has been a game changer for me.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + data.length) % data.length
    );
  };

  return (
    <div className="slider_container1">
      <div className="slider-scroll">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={item.img}
              alt={item.name}
              className={`slider-img ${index === currentIndex ? 'active-img' : ''}`}
            />
          </div>
        ))}
      </div>
      <div className="slider-details">
        <h2 className="slider-name">{data[currentIndex].name}</h2>
        <div className="slider-rating">
          {'★'.repeat(data[currentIndex].rating)}{' '}
          {'☆'.repeat(5 - data[currentIndex].rating)}
        </div>
        <p className="slider-descriptor">{data[currentIndex].descriptor}</p>
        <p className="slider-review">"{data[currentIndex].review}"</p>
      </div>
      <div className="slider-buttons">
        <button className="prev-btn" onClick={prevSlide}>&lt;</button>
        <button className="next-btn" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Slider;