import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function Cart() {
  const { cart, removeProduct } = useContext(CartContext);
  const savedCart = Array.isArray(cart) ? cart : [];
  return (
    <div>
      {cart.length == 0 && <h2>Nenhum produto adicionado</h2>}
      {savedCart.map((produto) => {
        return <div className="texo">{produto.title}</div>;
      })}
    </div>
  );
}
