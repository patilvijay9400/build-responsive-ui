import React, { useEffect, useRef } from "react";

const MapModal = ({ mapOpens, closeMap }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mapContainerRef.current &&
        !mapContainerRef.current.contains(event.target)
      ) {
        closeMap();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!mapOpens) return null;

  return (
    <div className="map-container">
      <div className="w-75 h-75" ref={mapContainerRef}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30255.141329721584!2d73.77332305767295!3d18.578877131633416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b92eeed990c7%3A0xe88f16c175d1af13!2sPimple%20Nilakh%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1692363573484!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-100 h-100"
        ></iframe>
      </div>
    </div>
  );
};

export default MapModal;
