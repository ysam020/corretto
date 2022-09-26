import React, { useEffect } from "react";
import "../styles/Shop.css";
import AppbarComponent from "../components/common-components/Appbar.tsx";
import BannerHeading from "../data/BannerHeading";
import ShopContainer from "../components/shop-components/ShopContainer";
import FooterComponent from "../components/common-components/FooterComponent";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop - Corretto";
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
              <h1>{BannerHeading[3].bannerHeading}</h1>
            </div>
          </div>
        </div>
      </div>

      <ShopContainer />
      <FooterComponent />
    </>
  );
}

export default Shop;
