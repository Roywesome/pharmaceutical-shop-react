import React from "react";
import ProductListContainer from "../containers/ProductListContainer";
import styled from "styled-components";

const Products = () => {
  return (
    <>
      <Title>Products</Title>
      <ProductListContainer />
    </>
  );
};

export default Products;

const Title = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  margin: 2rem 10%;
  text-align: center;
`;
