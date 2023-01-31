import React, { useEffect } from "react";
import "./styles/App.css";
import Home from "./Home";
import About from "./pages/About";
import OurMenu from "./pages/OurMenu";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "../src/pages/Checkout";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductSingle from "./pages/ProductSingle";
import { CartState } from "./context/Context";

function App() {
  // Cart State
  const {
    state: { cart },
    // dispatch,
  } = CartState();

  // animation on scroll
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/menu" element={<OurMenu />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route
          exact
          path="shop/product/:url"
          element={<ProductSingle />}
        ></Route>
        {cart.length > 0 ? (
          <Route exact path="/checkout" element={<Checkout />}></Route>
        ) : (
          <Route exact path="/" element={<Home />}></Route>
        )}
        <Route path="*" exact={true} element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
