import React from "react";
import "./styles.css";

const DynamicButton = ({ text, link, handleClick }) => {

  return (
    <>
      {text === "Contact Us" || text === "Privacy Policy" ? (
        <button className="custom-button" onClick={handleClick}>{text}</button>
      ) : (
        <button className="custom-button tooltip-range">
          {text}
          <span className="tooltiptext">Coming Soon</span>
        </button>
      )}
    </>
  );
};

export default DynamicButton;
