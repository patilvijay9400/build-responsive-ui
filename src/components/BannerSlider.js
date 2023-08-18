import React, { useState, useEffect } from "react";

const BannerSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container banner-slider">
      <div className="row">
        <div className="col-6 position-relative info h-100">
        {data.map((item, index) => (
            <div key={index} className={index === currentIndex ? "active" : ""}>
              <h4>{item.subTitle}</h4>
              <h1 className="display-4 fw-bold pb-3">{item.title}</h1>
              <button type="button" className="btn btn-outline-primary btn-lg">View More</button>
            </div>
          ))}
        </div>
        <div className="col-6 position-relative h-100">
          {data.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`Slide ${index}`}
              className={index === currentIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
