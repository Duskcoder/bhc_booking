import React from 'react';
import Logo from "../assets/logo_1.png"; // Ensure this path is correct
import "../style/Loading.css"
function Loading() {
  return (
    <div className="loading-container">
      <img src={Logo} alt="Loading..." className="loading-logo" />
    </div>
  );
}

export default Loading;
