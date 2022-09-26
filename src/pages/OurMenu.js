import React, { useEffect } from "react";
import "../styles/OurMenu.css";
import Headings from "../data/Headings";
import AppbarComponent from "../components/common-components/Appbar.tsx";
import BannerHeading from "../data/BannerHeading";
import BeveragesComponent from "../components/menu-components/BeveragesComponent";
import FooterComponent from "../components/common-components/FooterComponent";

function OurMenu() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Menu - Corretto";
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('./images/bg-images/our-menu-bg.jpeg')`,
          backgroundSize: `cover`,
        }}
      >
        <div className="banner banner-about banner-our-menu">
          <AppbarComponent />

          <div className="banner-container">
            <div className="banner-heading">
              <h1>{BannerHeading[1].bannerHeading}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" container heading-component">
        <h1>{Headings[3].heading}</h1>
        <img src={Headings[3].titleSeparator} alt="" />
        <p>{Headings[3].subHeading}</p>
      </div>

      <BeveragesComponent />

      <div
        style={{
          backgroundImage: `url('./images/bg-images/canvas-bg.jpeg')`,
        }}
      >
        <div className=" container heading-component">
          <h1>{Headings[4].heading}</h1>
          <img src={Headings[4].titleSeparator} alt="" />
          <p>{Headings[4].subHeading}</p>
        </div>

        <BeveragesComponent />
      </div>

      <FooterComponent />
    </>
  );
}

export default OurMenu;
