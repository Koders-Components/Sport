import React, { useState, useEffect } from 'react';
import './Truf1.css';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: "/item/img/Slider_photo.jpg",
    rating: 5,
    description: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best."
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/item/img/user2.png",
    rating: 4,
    description: "A good VPN service with decent performance and great support."
  },
  {
    id: 3,
    name: "Emily Johnson",
    image: "/item/img/user3.png",
    rating: 5,
    description: "Excellent VPN! Reliable, fast, and very easy to use."
  }
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slider_wrap">
      <div className="slider_top">
        <img
          src={reviews[currentIndex].image}
          alt="User"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            padding: "2px",
            border: "1px solid black"
          }}
        />
        <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
          {reviews[currentIndex].name}
        </span>
        <span style={{ marginLeft: "auto" }}>
          {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
            <span key={i} style={{ color: "gold", fontSize: "20px" }}>★</span>
          ))}
        </span>
      </div>
      <div className="slider_bottom">
        <p>{reviews[currentIndex].description}</p>
      </div>
    </div>
  );
}

export default Slider;
