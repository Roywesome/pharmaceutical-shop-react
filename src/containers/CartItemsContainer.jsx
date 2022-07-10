import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import CartItems from "../components/CartItems";

const CartItemsContainer = () => {
  const { cart, addCart, delFromCart, clearCart } = useContext(DataContext);
  return (
    <CartItems
      cart={cart}
      addCart={addCart}
      delFromCart={delFromCart}
      clearCart={clearCart}
    />
  );
};

export default CartItemsContainer;
