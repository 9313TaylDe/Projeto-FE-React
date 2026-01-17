import products from "../services/products";
import Card from "./Product_CardId";
import { ProductCard } from "../components/ProductCard";

import { useParams } from "react-router-dom";

const Product_Page_Show = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Todos os detalhes</h2>
      <ProductCard product={products} />
    </div>
  );
};
export default Product_Page_Show;
