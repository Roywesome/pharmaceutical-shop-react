import React from "react";
import styled from "styled-components";
import backImf from "../../assets/back.jpg";
import ProductListContainer from "../containers/ProductListContainer";

const Home = () => {
  return (
    <div>
      <BackgroundImage>
        <img src={backImf} alt="logo" />
      </BackgroundImage>
      <Title>Products</Title>
      <ProductListContainer />
    </div>
  );
};

export default Home;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  /*background: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;*/
  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  margin: 2rem 10%;
  text-align: center;
`;
