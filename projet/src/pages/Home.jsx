import products from "../services/products";
import { ProductCard } from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Cart } from "./Cart";
import Login from "./Login_Page";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
function Home() {
  const navigate = useNavigate();
  const { user, Logout } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const todosprodutos = products.flatMap((prod) => prod.itens);
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <section className="w-full flex flex-wrap justify-between gap-1">
        <div className="flex flex-wrap justify-between gap-3">
          <ProductCard products={todosprodutos} />
        </div>

        <Cart />
      </section>
    </div>
  );
}

export default Home;
