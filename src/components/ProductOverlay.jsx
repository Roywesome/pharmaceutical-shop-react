import React from "react";
import styled from "styled-components";
import {useNavigate, useLocation} from 'react-router-dom'

const ProductOverlay = ({ product, handleMouseLeave }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectProduct = (sku) => {
    if(location.pathname === '/products'){
      navigate(`${sku}`)
    }else{
      navigate(`products/${sku}`)
    }
    
  }

  return (
    <Overlay imgUrl={product.img} onMouseLeave={() => handleMouseLeave(product.sku)}>
      <Button onClick={() => redirectProduct(product.sku)}>Ver detalles</Button>
    </Overlay>
  );
};

export default ProductOverlay;

const Overlay = styled.div`
  background:linear-gradient(0deg, rgba(108, 117, 108, 0.3), rgba(108,117, 108, 0.3)), ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 600px;
  position: relative;
`;


  const Button = styled.button`
  background-color: #4361ee;
  color: #fff;
  border: none;
  border-radius: 5rem;
  font-family: "Source Code Pro", monospace;
  font-size: 1.5rem;
  width: 60%;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  position: absolute;
  bottom: 40%;
  left: 20%;
  cursor: pointer;
  `