import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Search__footer">
      <div className="Search__footerLocation">
        <span>India</span>
        <div className="loc">721101, Midnapore, West Bengal </div>
        <p> - Based on your past activity - Update location</p>
      </div>
      <div className="feedback">
        <div className="feedback__options">
          <p>Help</p>
          <p>Send feedback</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
