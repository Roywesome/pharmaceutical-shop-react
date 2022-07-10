import { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { BsCart3 } from "react-icons/bs";

const Product = () => {
  const { sku } = useParams();
  const { products, addCart } = useContext(DataContext);

  const itemProduct = products.find((product) => product.sku === sku);
  console.log(itemProduct);

  return (
    <ProductContainerStyled>
      <div className="product-img">
        <img src={itemProduct.img} alt={itemProduct.name} />
      </div>
      <div className="product-description">
        <h1>{itemProduct.name}</h1>
        <span>{itemProduct.sku}</span>
        <h2>$ {itemProduct.price}</h2>
        <h4>Description</h4>
        <p>{itemProduct.description}</p>
        <ButtonStyled primary onClick={() => addCart(itemProduct.sku)}>
          Add to Cart <BsCart3 />
        </ButtonStyled>
      </div>
    </ProductContainerStyled>
  );
};

export default Product;

const ProductContainerStyled = styled.div`
  font-family: "Source Code Pro", monospace;
  margin: 0 10%;
  display: grid;
  grid-template-columns: 50% 50%;

  .product-img {
    img {
      width: 100%;
    }
  }

  .product-description {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ButtonStyled = styled.button`
  font-family: "Source Code Pro", monospace;
  background: ${(props) => (props.primary ? "#ef233c" : "white")};
  color: ${(props) => (props.primary ? "white" : "#ef233c")};

  font-size: 2em;
  margin: 1em;
  padding: 0.5rem 2rem;
  border: 2px solid palevioletred;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e5383b;
  }
`;
