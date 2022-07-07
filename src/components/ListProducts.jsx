import { useReducer } from "react";
import styled from "styled-components";
import data from "../db/data.json";
import ItemProduct from "./ItemProduct";


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



const ListProducts = () => {
  const [state, dispatch] = useReducer(reducer, data);

  const addCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <>
      <Title>Products</Title>
      <ProductCard>
        {state.products?.map((product) => {
          return (
            <ItemProduct
              key={product.sku}
              addCart={addCart}
              product={product}
            />
          );
        })}
      </ProductCard>
    </>
  );
};

export default ListProducts;

const ProductCard = styled.div`
  font-family: "Source Code Pro", monospace;
  margin: 2rem 10%;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
`;

const Title = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  margin: 2rem 10%;
  text-align: center;
`;
