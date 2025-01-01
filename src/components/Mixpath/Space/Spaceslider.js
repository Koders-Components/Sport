import React, { useState, useEffect } from 'react';
import './Space.css';

const reviews = [
  {
    id: 1,
    name: "Oberon Shaw, MCH",
    des : "Head of Talent Acquisition, North America",
    image: "/item/img/Slider_photo.jpg",
    description: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    cot:'“'
  },
  {
    id: 2,
    name: "Oberon Shaw, MCH",
    des : "Head of Talent Acquisition, North America",
    image: "/item/img/Fm1.png",
    description: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    cot:'“'
    },
  {
    id: 3,
    name: "Oberon Shaw, MCH",
    des : "Head of Talent Acquisition, North America",
    image: "/item/img/Whiteleady.png",
    description: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    cot:'“'
  }
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slider_wrap">
      <div className="slider_bottom">
        <div className='slider_bottom_cots'>
            {reviews[currentIndex].cot}
        </div>
        <div className='slider_bottom_dtl'>
            <p>{reviews[currentIndex].description}</p>
        </div>
      </div>
      <div className="slider_top">
        <img
          src={reviews[currentIndex].image}
          alt="User"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            padding: "2px",
            border: "1px solid black"
          }}
        />
        <div className='user_description'>
            <div className='name'>
                {reviews[currentIndex].name}
            </div>
            <div className='des'>
                {reviews[currentIndex].des}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;