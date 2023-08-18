import React from "react";

const Modal = (props) => {
  if (!props.isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content d-block">
        <h3>{props.children}</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button onClick={props.onClose} className="btn btn-outline-secondary">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
