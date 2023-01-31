import React from "react";
import AppbarComponent from "../common-components/Appbar.tsx";
import { useNavigate } from "react-router-dom";

function HomeBanner() {
  // Redirect to shop Page
  let navigate = useNavigate();
  const shopPageRedirect = () => {
    let path = `/shop`;
    navigate(path);
  };

  return (
    <>
      <div className="hero">
        <AppbarComponent />

        <div className="hero-container">
          <div className="hero-content">
            <img src="./images/h1-slider-img-1.png" alt="" />
            <h1>CORRETTO</h1>
            <img
              className="slider-separator"
              src="./images/slider-separator-img.png"
              alt="slider-separator"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
              ligula eget tortor consequat iaculis
            </p>
            <button onClick={shopPageRedirect} className="hero-btn">
              shop here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
