import React from "react";
import styled from "styled-components";
import backImf from "../../assets/img.webp";
import ListProducts from "../components/ListProducts";

const Home = () => {
  return (
    <div>
      <BackgroundImage imgUrl={backImf}></BackgroundImage>
      <ListProducts />
    </div>
  );
};

export default Home;

const BackgroundImage = styled.div`
  background: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 86vh;
`;
