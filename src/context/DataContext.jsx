import {useReducer, createContext} from 'react';
import data from '../db/data.json'

const DataContext = createContext();

const TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
};

const reducer = (state, action) => {
    switch (action.type) {
      case TYPES.ADD_TO_CART:
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
      default:
        break;
    }
  };


const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, data);

    const addCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
      };

      const value = {
        products: state.products,
        cart: state.cart,
        addCart,
      }
  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  )
}

export {DataProvider, DataContext};