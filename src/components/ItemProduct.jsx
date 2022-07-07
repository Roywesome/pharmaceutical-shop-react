import { useState } from "react";
import styled from "styled-components";
import ProductOverlay from "./ProductOverlay";

const itemProduct = ({ product, addCart }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = (sku) => {
    product.sku === sku ? setHover(true) : setHover(false);
  };

  const handleMouseLeave = (sku) => {
    product.sku === sku && setHover(false);
  };

  return (
    <>
      <Card>
        {!hover ? (
          <div
            className="container"
            onMouseEnter={() => handleMouseEnter(product.sku)}
          >
            {" "}
            <img src={product.img} alt="" />{" "}
          </div>
        ) : (
          <ProductOverlay product={product} handleMouseLeave={handleMouseLeave} />
        )}
        <p>{product.name}</p>
        <span>$ {product.price}</span>
        <Button primary onClick={() => addCart(product.sku)}>
          AGREGAR
        </Button>
      </Card>
    </>
  );
};

export default itemProduct;

const Card = styled.div`
  height: 80%;
  margin: 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container {
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  span {
    font-weight: bold;
  }
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#ef233c" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#ef233c")};
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  border: none;
  border-radius: 5rem;
  font-family: "Source Code Pro", monospace;
`;
