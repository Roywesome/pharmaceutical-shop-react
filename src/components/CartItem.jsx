import React from "react";
import styled from "styled-components";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

const CartItem = ({ cartItem, addCart, delFromCart }) => {
  return (
    <CardStyled>
      <CardItemContainer>
        <div className="product-img">
          <img src={cartItem.img} alt={cartItem.name} />
        </div>

        <CardItemStyled>
          <h3 className="cart-name">{cartItem.name}</h3>
          <div className="cart-btn-container">
            <div className="cart-btns">
              <ButtonStyled
                primary
                onClick={() => delFromCart(cartItem.sku, true)}
              >
                <BsDashLg />
              </ButtonStyled>
              <span className="cart-item-total">{cartItem.quantity}</span>
              <ButtonStyled onClick={() => addCart(cartItem.sku)}>
                <BsPlusLg />
              </ButtonStyled>
            </div>
            <button
              className="delete-cart-item"
              onClick={() => delFromCart(cartItem.sku)}
            >
              Remove
            </button>
          </div>
          <p className="cart-price">$ {cartItem.price}</p>
        </CardItemStyled>
      </CardItemContainer>
      <div className="total">Total: $ {cartItem.price * cartItem.quantity}</div>
    </CardStyled>
  );
};

export default CartItem;

const CardStyled = styled.div`
  font-family: "Source Code Pro", monospace;
  background-color: #adb5bd;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  padding: 1rem 3rem;
  .total {
    display: flex;
    justify-content: end;
    align-items: end;
    font-weight: 700;
  }
`;

const CardItemContainer = styled.div`
display: grid;
grid-template-columns: 20% 80%;
align-items: center;
.product-img{
  padding: 1.5rem;
  img{
    width: 100%;
    border-radius: 1.5rem 0 1.5rem 0;
  }
`;

const CardItemStyled = styled.div`
  display: grid;
  grid-template-columns: 50% 30% 20%;
  align-items: center;

  .product-img {
    padding: 0.2rem;
    img {
      width: 100%;
      border-radius: 0.5rem;
    }
  }

  .cart-btn-container {
    display: flex;
    flex-direction: column;
  }
  .cart-btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete-cart-item {
    font-family: "Source Code Pro", monospace;
    font-weight: 700;
    padding: 0;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    margin: 0.5rem 0;
    justify-content: center;

    &:hover {
      color: #f21b3f;
    }
  }

  .cart-item-total {
    width: 3rem;
    height: 2rem;
    padding: 0.5rem;
    text-align: center;
    background-color: #fff;
    border-radius: 0.5rem;
    margin: 0 0.5rem;
    font-size: 1.5rem;
  }
  .cart-price {
    display: flex;
    justify-content: center;
  }
`;

const ButtonStyled = styled.div`
  background-color: ${(props) => (props.primary ? "#e5383b" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#e5383b")};
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
