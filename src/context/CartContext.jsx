import { createContext, useEffect, useState } from "react";
import products from "../services/products";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("saved");
    try {
      const prsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(prsed) ? prsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(cart));
  }, [cart]);

  function addProduct(product) {
    alert("Produo adicionado com sucesso");
    setCart((prev) => [...prev, product]);
  }

  function removeProduct(produt) {
    alert("Produo removido com sucesso");

    setCart((prev) => prev.filter((prod) => prod.id !== produt.id));
  }

  function clearCart() {
    setCart([]);
    alert("Limpando carrinho");
  }

  const validId = products.flatMap((prod) => prod.itens.map((prod) => prod.id));
  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, validId, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
