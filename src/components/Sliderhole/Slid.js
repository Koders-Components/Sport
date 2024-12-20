import React, { useState } from "react";
import "./Slid.css";

const sliderData = [
  {
    id: 1,
    img: '/item/img/Slider_photo.jpg',
    name: "Snell Jumper",
    price: "$145.99",
    tag: "NEW",
  },
  {
    id: 2,
    img: '/item/img/Slider_photo.jpg',
    name: "Dee Of Jacket",
    price: "$65.99",
    originalPrice: "$82.99",
    tag: "SALE",
  },
  {
    id: 3,
    img: '/item/img/Slider_photo.jpg',
    name: "Worry Free T-Shirt",
    price: "$29.99",
  },
  {
    id: 4,
    img: '/item/img/Slider_photo.jpg',
    name: "Krust Sweatshirt",
    price: "$63.99",
    tag: "NEW",
  },
  {
    id: 5,
    img: '/item/img/Slider_photo.jpg',
    name: "Classic Hoodie",
    price: "$75.99",
  },
];

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-wrapper">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 290}px)`,
          }}
        >
          {sliderData.map((item) => (
            <div key={item.id} className="slider-item">
              <img src={item.img} alt={item.name} className="slider-image" />
              {item.tag && <span className={`tag ${item.tag.toLowerCase()}`}>{item.tag}</span>}
              <div className="slider-details">
                <h3>{item.name}</h3>
                <p className="slider-price">
                  {item.price}{" "}
                  {item.originalPrice && (
                    <span className="original-price">{item.originalPrice}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default CustomSlider;