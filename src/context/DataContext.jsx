import { useReducer, createContext, useEffect } from "react";
import { products, cart } from "../db/data.json";
import CartReducer from "../reducers/cart/CartReducer";
import {
  ADD_TO_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from "../reducers/cart/CartTypes";

const DataContext = createContext();

const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  products,
  cart: storage,
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state?.cart));
  }, [state.cart]);

  const addCart = (id) => {
    dispatch({ type: ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: REMOVE_ONE_ITEM_FROM_CART, payload: id });
    } else {
      dispatch({ type: REMOVE_ALL_FROM_CART, payload: id });
    }
  };

  const clearCart = (id) => {
    dispatch({ type: CLEAR_CART, payload: id });
  };

  const value = {
    products: state?.products,
    cart: state?.cart,
    addCart,
    delFromCart,
    clearCart,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider, DataContext };
