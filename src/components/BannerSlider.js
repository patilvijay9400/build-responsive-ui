import React, { useState, useEffect } from "react";

const BannerSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="banner-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default BannerSlider;
