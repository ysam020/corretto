import React, { useEffect } from "react";
import "../styles/ProductSingle.css";
import AppbarComponent from "../components/common-components/Appbar.tsx";
import BannerHeading from "../data/BannerHeading";
import ProductSingleContainer from "../components/shop-components/ProductSingleContainer";
import FooterComponent from "../components/common-components/FooterComponent";

function ProductSingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop - Corretto";
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('/images/bg-images/product-bg.jpeg')`,
          backgroundSize: `cover`,
        }}
      >
        <div className="banner banner-about banner-our-menu">
          <AppbarComponent />

          <div className="banner-container">
            <div className="banner-heading">
              <h1>{BannerHeading[4].bannerHeading}</h1>
            </div>
          </div>
        </div>
      </div>

      <ProductSingleContainer />
      <FooterComponent />
    </>
  );
}

export default ProductSingle;
