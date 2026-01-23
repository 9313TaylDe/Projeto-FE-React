import products from "../services/products";
import { ProductCard } from "../components/ProductCard";
import { useParams } from "react-router-dom";

const Product_Page_Show = () => {
  const { id } = useParams();

  console.log("ID:", id);
  console.log("Produtos:", products);

  const produc = products
    .flatMap((categoria) => categoria.itens)
    .find((item) => Number(item.id) === Number(id));

  return (
    <div className="w-full h-[98vh] bg-red-600 flex flex-wrap p-2">
      <h2 className="w-full">Todos os detalhes</h2>

      {produc ? (
        <ProductCard detalhes={true} products={[produc]} />
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </div>
  );
};

export default Product_Page_Show;
