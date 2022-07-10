import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddCart }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const redirectToProduct = (sku) => {
    navigate(`/products/${sku}`);
  };

  return (
    <CardWrapperStyled>
      {!hover ? (
        <div className="container" onMouseEnter={() => setHover(true)}>
          <img src={product.img} alt={product.name} />
        </div>
      ) : (
        <OverlayStyled
          imgUrl={product.img}
          onMouseLeave={() => setHover(false)}
        >
          <Button2 onClick={() => redirectToProduct(product.sku)}>
            Ver detalles
          </Button2>
        </OverlayStyled>
      )}
      <p>{product.name}</p>
      <span>$ {product.price}</span>
      <ButtonStyled primary onClick={() => onAddCart(product.sku)}>
        AGREGAR
      </ButtonStyled>
    </CardWrapperStyled>
  );
};

export default ProductCard;

const CardWrapperStyled = styled.div`
  height: 80%;
  margin: 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #da1e37;
  box-shadow: 16px -16px #da1e37;
  padding: 1rem 0;
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

const ButtonStyled = styled.button`
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

const OverlayStyled = styled.div`
  background: linear-gradient(
      0deg,
      rgba(108, 117, 108, 0.3),
      rgba(108, 117, 108, 0.3)
    ),
    ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 600px;
  position: relative;
`;

const Button2 = styled.button`
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
`;
