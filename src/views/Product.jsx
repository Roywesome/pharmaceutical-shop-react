import {useContext} from "react";
import {useParams} from "react-router-dom"
import {DataContext} from '../context/DataContext'

const Product = () => {
  const { sku } = useParams();
  const {products, cart, addCart} = useContext(DataContext);
  console.log(products, cart)
  return <div>
    <h1>Product Item:{sku}</h1>
  </div>;
};

export default Product;
