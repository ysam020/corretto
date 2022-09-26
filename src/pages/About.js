import React, { useEffect } from "react";
import "../styles/About.css";
import AppbarComponent from "../components/common-components/Appbar.tsx";
import BannerHeading from "../data/BannerHeading";
import RobustaComponent from "../components/about-us-components/RobustaComponent";
import TheOwnerComponent from "../components/about-us-components/TheOwnerComponent";
import FooterComponent from "../components/common-components/FooterComponent";
import OurTrustedBrands from "../components/about-us-components/OurTrustedBrands";
import { AnimatePresence } from "framer-motion";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Corretto";
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('./images/bg-images/about-us-bg.jpeg')`,
          backgroundSize: `cover`,
        }}
      >
        <div className="banner banner-about banner-our-menu">
          <AppbarComponent />

          <div className="banner-container">
            <div className="banner-heading">
              <h1>{BannerHeading[0].bannerHeading}</h1>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        <RobustaComponent />
      </AnimatePresence>

      <TheOwnerComponent />
      <OurTrustedBrands />
      <FooterComponent />
    </>
  );
}

export default About;
