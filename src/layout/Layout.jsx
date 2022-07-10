import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/pills.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";

const Layout = () => {
  const { cart } = useContext(DataContext);

  const quantityProducts = () => {
    let quantity;
    const newArray = cart.map((item) => item.quantity);
    quantity = newArray.reduce((prev, curr) => prev + curr, 0);
    return quantity;
  };

  return (
    <div>
      <Nav>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav className="menu">
          <Link className="item-menu" to="/products">
            Products
          </Link>
          <Link className="item-menu" to="/contact">
            Contact
          </Link>
          <Link className="item-menu cart" to="/cart">
            <MdOutlineAddShoppingCart />
          </Link>
          {quantityProducts() > 0 ? (
            <Link className="count" to="/cart">
              {quantityProducts()}
            </Link>
          ) : null}
        </nav>
      </Nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const Nav = styled.div`
  font-family: "IBM Plex Mono", monospace;
  background-color: transparent;
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 1rem 10%;
  img {
  }
  .menu {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .item-menu {
    margin-right: 2rem;
    text-decoration: none;
    font-size: 1.5rem;
  }
  /*.item-menu:nth-last-child(2) {
    font-size: 2.5rem;
    align-items: center;
  }*/
  .cart {
    font-size: 2.5rem;
    align-items: center;
  }

  .count {
    margin-left: -3rem;
    margin-top: -3rem;
    background-color: #e5383b;
    color: #fff;
    padding: 0.2rem 0.7rem;
    font-size: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease-in-out;
  }
`;
