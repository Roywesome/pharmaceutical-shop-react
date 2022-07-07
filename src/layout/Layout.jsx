import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import logo from "../../assets/pills.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import styled from "styled-components";

const Layout = () => {
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
          <Link className="item-menu" to="/about-us">
            About Us
          </Link>
          <Link className="item-menu" to="/contact">
            Contact
          </Link>
          <Link className="item-menu" to="/cart">
            <MdOutlineAddShoppingCart />
          </Link>
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
  padding: 2rem 10%;
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
  .item-menu:nth-last-child(1) {
    font-size: 2.5rem;
  }
`;
