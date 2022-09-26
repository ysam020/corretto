import React, { useEffect } from "react";
import "../styles/Checkout.css";
import AppbarComponent from "../components/common-components/Appbar.tsx";
import BannerHeading from "../data/BannerHeading";
import CheckoutComponent from "../components/checkout-components/CheckoutComponent";
import FooterComponent from "../components/common-components/FooterComponent";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Checkout - Corretto";
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('./images/bg-images/shop-bg.jpeg')`,
          backgroundSize: `cover`,
        }}
      >
        <div className="banner banner-about banner-our-menu">
          <AppbarComponent />

          <div className="banner-container">
            <div className="banner-heading">
              <h1>{BannerHeading[6].bannerHeading}</h1>
            </div>
          </div>
        </div>
      </div>

      <CheckoutComponent />
      <FooterComponent />
    </>
  );
}

export default Checkout;
