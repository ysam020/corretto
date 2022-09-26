import React, { useEffect } from "react";
import "../styles/Contact.css";
import AppbarComponent from "../components/common-components/Appbar.tsx";
import BannerHeading from "../data/BannerHeading";
import GetInTouchComponent from "../components/contact-us-components/GetInTouchComponent";
import FooterComponent from "../components/common-components/FooterComponent";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Corretto";
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('./images/bg-images/contact-us-bg.jpeg')`,
          backgroundSize: `cover`,
        }}
      >
        <div className="banner banner-about banner-our-menu">
          <AppbarComponent />

          <div className="banner-container">
            <div className="banner-heading">
              <h1>{BannerHeading[2].bannerHeading}</h1>
            </div>
          </div>
        </div>
      </div>

      <GetInTouchComponent />
      <FooterComponent />
    </>
  );
}

export default Contact;
