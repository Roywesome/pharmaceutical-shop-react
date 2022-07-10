import {
  ADD_TO_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from "./CartTypes";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const selectProduct = state.products.find(
        (product, index) => product.sku === action.payload
      );

      const itemInCart = state.cart.find(
        (item, index) => item.sku === selectProduct.sku
      );

      return itemInCart
        ? {
            ...state,
            cart: [
              ...state.cart.map((item) =>
                item.sku === selectProduct.sku
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            ],
          }
        : {
            ...state,
            cart: [...state.cart, { ...selectProduct, quantity: 1 }],
          };

    case REMOVE_ONE_ITEM_FROM_CART:
      const removeItem = state.cart.find(
        (item, index) => item.sku === action.payload
      );
      return removeItem.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item, index) =>
              item.sku === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter(
              (item, index) => item.sku !== action.payload
            ),
          };

    case REMOVE_ALL_FROM_CART:
      const newCart = state.cart.filter(
        (item, index) => item.sku !== action.payload
      );
      return {
        ...state,
        cart: newCart,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default CartReducer;
