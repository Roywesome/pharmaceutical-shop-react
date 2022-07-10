import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddCart }) => {
  if (!products?.length) {
    return <p>No hay Productos</p>;
  }

  return (
    <ProductListContainerStyled>
      {products?.map((product) => {
        return (
          <ProductCard
            key={product.sku}
            onAddCart={onAddCart}
            product={product}
          />
        );
      })}
    </ProductListContainerStyled>
  );
};

export default ProductList;

const ProductListContainerStyled = styled.div`
  font-family: "Source Code Pro", monospace;
  margin: 2rem 10%;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
`;
