import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import Layout from "./layout/Layout";
import Products from "./views/Products";
import AboutUs from "./views/AboutUs";
import Cart from "./views/Cart";
import Contact from "./views/Contact";
import Product from "./views/Product";
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ListProducts />} />
            <Route path=":sku" element={<Product />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
