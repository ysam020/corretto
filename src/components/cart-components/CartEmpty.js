import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function CartEmpty() {
  // Redirect to shop Page
  let navigate = useNavigate();
  const shopPageRedirect = () => {
    let path = `/shop`;
    navigate(path);
  };

  return (
    <div className="empty-cart-container">
      <BsCart3 className="navlink-cart empty-cart-icon" />
      <h1>Your cart is empty</h1>
      <button onClick={shopPageRedirect}>return to shop</button>
    </div>
  );
}

export default CartEmpty;
