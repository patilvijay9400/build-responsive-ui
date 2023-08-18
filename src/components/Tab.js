import React from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div className={`tab p-2 px-md-3 py-md-2 rounded-3 ${isActive ? "active primary-bg text-white" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default Tab;
