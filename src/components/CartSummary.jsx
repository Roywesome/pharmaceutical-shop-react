import React from "react";
import styled from "styled-components";

const CartSummary = ({ clearCart, cart }) => {
  const sumTotal = () => {
    let total;
    const newArray = cart.map((item) => item.price * item.quantity);
    total = newArray.reduce((acc, curr) => acc + curr);
    return total;
  };
  sumTotal();

  return (
    <CardContainerStyled>
      <div className="subtotal">
        <p>Sub Total</p>
        <span>${sumTotal()}</span>
      </div>
      <div className="total">
        <p>Total to pay</p>
        <span>${sumTotal()}</span>
      </div>
      <div className="btns">
        <ButtonStyled succes onClick={() => clearCart()}>
          Clear Cart
        </ButtonStyled>
        <ButtonStyled>Go Shopping</ButtonStyled>
      </div>
    </CardContainerStyled>
  );
};

export default CartSummary;

const CardContainerStyled = styled.div`
font-family: "Source Code Pro", monospace;
  background-color: #adb5bd;
  margin: 0 2rem;;
  height: 10rem;
  padding: 1rem;
  border-radius: 0.5rem;

  .subtotal{
    display: flex;
    fle-direction: column;
    justify-content: space-between;
    align-items: center;
    p{
        font-size: 1rem;
    }
  }

  .total{
    display: flex;
    fle-direction: column;
    justify-content: space-between;
    align-items: center;
    p{
        font-size; 1.5rem;
        font-weight: bold;
    }
    span{
        font-size; 1.5rem;
        font-weight: bold;
    }
  }

  .btns{
    display: flex;
    justify-content: space-between;
  }

`;

const ButtonStyled = styled.div`
  font-family: "Source Code Pro", monospace;
  background-color: ${(props) => (props.succes ? "#52b788" : "#fff")};
  color: ${(props) => (props.succes ? "#fff" : "#000")};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
