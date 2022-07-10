import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ProductList from "../components/ProductList";

const ProductListContainer = () => {
  const { products, addCart } = useContext(DataContext);

  /*if(isLoading){
      return <p>Loading...</p>
    }*/

  return <ProductList products={products} onAddCart={addCart} />;
};

export default ProductListContainer;
