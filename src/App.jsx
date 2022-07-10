import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import Layout from "./layout/Layout";
import Cart from "./views/Cart";
import Contact from "./views/Contact";
import Products from "./views/Products";
import Product from "./views/Product";
import ListViewLayout from "./layout/ListViewLayout";
import PageNotFound from "./views/PageNotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/products" element={<ListViewLayout />}>
            <Route index element={<Products />} />
            <Route path=":sku" element={<Product />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
