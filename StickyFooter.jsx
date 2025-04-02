import React from "react";
import "./StickyFooter.css";

const StickyFooter = () => {
  return (
    <div className="sticky-footer">
      <p>
        TAKE YOUR BUSINESS ONLINE GET YOUR E-COMMERCE APP @ ₹9,999/-
      </p>
      <button  onClick={() => window.open("https://wa.me/919685283772?text=Hello, I am interested in your services.", "_blank")}  className="cta-button">GET STARTED</button>
    </div>
  );
};

export default StickyFooter;
