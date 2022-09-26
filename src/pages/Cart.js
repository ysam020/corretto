import { useEffect } from "react";
import "../styles/Cart.css";
import AppbarComponent from "../components/common-components/Appbar.tsx";
import BannerHeading from "../data/BannerHeading";
import CartContainer from "../components/cart-components/CartContainer";
import CartEmpty from "../components/cart-components/CartEmpty";
import FooterComponent from "../components/common-components/FooterComponent";
import { CartState } from "../context/Context";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cart - Corretto";
  }, []);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div
        style={{
          backgroundImage: `url('./images/bg-images/cart-bg.jpeg')`,
          backgroundSize: `cover`,
        }}
      >
        <div className="banner banner-about banner-our-menu">
          <AppbarComponent />

          <div className="banner-container">
            <div className="banner-heading">
              <h1>{BannerHeading[5].bannerHeading}</h1>
            </div>
          </div>
        </div>
      </div>

      {cart.length > 0 ? <CartContainer /> : <CartEmpty />}

      <FooterComponent />
    </>
  );
};

export default Cart;
