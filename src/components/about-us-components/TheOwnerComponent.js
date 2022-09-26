import React from "react";

function TheOwnerSubComponent() {
  return (
    <div className="container about-section-3">
      <div className="row left-col" >
        <img src='./images/owner-img.jpeg' alt="" className="owner-image"/>
      </div>
      <div className="row right-col">
        <h2>The Owner's Words</h2>
        <img src='./images/title-separator.png' alt="" className="title-separator" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <span> Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in</span>
          <img src='./images/signature-img.png' alt="" className="signature-img" />
      </div>
    </div>
  );
}

export default TheOwnerSubComponent;
