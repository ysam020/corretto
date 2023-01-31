import { createContext, useContext, useReducer } from "react";
import ProductList from "../data/ProductList";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...ProductList];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
