import React, { useState } from "react";
import "./Product.css";

const Slider = () => {
  const slides = [
    { id: 1, image: "/item/img/Slider_photo.jpg", alt: "Slide 1" },
    { id: 2, image: "/item/img/Slider_photo.jpg", alt: "Slide 2" },
    { id: 3, image: "/item/img/Slider_photo.jpg", alt: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
   <> 
    <div className="product_main">
        <div className="slider">
        <div
            className="slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {slides.map((slide) => (
            <div className="slide" key={slide.id}>
                <img src={slide.image} alt={slide.alt} />
            </div>
            ))}
        </div>
        <button className="prev" onClick={prevSlide}>
            &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
            &#10095;
        </button>
        </div>
    </div>
    </>
  );
};

export default Slider;
