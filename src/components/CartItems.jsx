import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartItems = ({ cart, addCart, delFromCart, clearCart }) => {
  const navigate = useNavigate();
  if (!cart?.length) {
    return (
      <CartContainerStyled>
        <div>
          <p>You still have no products in your shopping cart.</p>
          <ButtonStyled primary onClick={() => navigate("/")}>
            Go to homepage
          </ButtonStyled>
        </div>
      </CartContainerStyled>
    );
  }

  return (
    <CartContainerStyled>
      <CardContainerStyled>
        {cart?.map((cartItem, index) => {
          return (
            <CartItem
              key={index}
              cartItem={cartItem}
              addCart={addCart}
              delFromCart={delFromCart}
              clearCart={clearCart}
            />
          );
        })}
      </CardContainerStyled>
      {cart && <CartSummary clearCart={clearCart} cart={cart} />}
    </CartContainerStyled>
  );
};

export default CartItems;

const CartContainerStyled = styled.div`
  margin: 0 10%;
  display: grid;
  grid-template-columns: 70% 30%;
  font-family: "Source Code Pro", monospace;
`;

const CardContainerStyled = styled.div`
  font-family: "Source Code Pro", monospace;
`;

const ButtonStyled = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  padding: 0.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
