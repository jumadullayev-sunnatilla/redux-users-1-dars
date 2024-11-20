import React from "react";
import "./Modal.css";
const Modal = ({ children, close }) => {
  return (
    <div className="modal">
      <div onClick={() => close(false)} className="modal__overlay"></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
