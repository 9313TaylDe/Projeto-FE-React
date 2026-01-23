import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Product_Img from "./Product_Img";
import { Link, useNavigate } from "react-router-dom";

export function ProductCard({
  products = [],
  largura,
  altura,
  detalhes = false,
}) {
  const { cart, addProduct, removeProduct } = useContext(CartContext);
  const LIMITE_INICIAL = 12;
  const navigate = useNavigate();

  const [quantidadeVisivel, setQuantidadeVisivel] = useState(LIMITE_INICIAL);
  const [expandiu, setexpandiu] = useState(false);

  const verMais = () => {
    setexpandiu(true);
    setQuantidadeVisivel((prev) => Math.min(prev + 12, products.length));
  };

  const verMenos = () => {
    setQuantidadeVisivel((prev) => {
      const novoValor = Math.max(prev - 12, LIMITE_INICIAL);
      if (novoValor === LIMITE_INICIAL) setexpandiu(false);
      return novoValor;
    });
  };

  return (
    <div
      style={{ width: largura, height: altura }}
      className={`${
        detalhes
          ? "flex h-fit w-[50%] items-center p-1 gap-2 border border-black"
          : "flex w-full flex-wrap gap-3 p-2 justify-between items-center"
      }`}
    >
      {products.slice(0, quantidadeVisivel).map((produto) => {
        const ja_no_carrinho = cart.some((prod) => prod.id === produto.id);

        return (
          <div
            key={produto.id}
            className={`${
              detalhes
                ? "w-full h-fit flex flex-col items-center text-center border border-black"
                : "flex flex-col"
            }`}
          >
            <Link to={`/product-detalhes/${produto.id}`}>Detalhes</Link>
            {/* IMAGEM */}
            <div className="rounded-lg flex justify-center items-center">
              <Product_Img
                classname={`${
                  detalhes
                    ? "w-full h-full"
                    : "h-[240px] w-[200px] object-cover"
                } dark:invert transition-all duration-[1200ms]`}
                images={<img src={produto.img} />}
              />
            </div>

            <div
              className={`${
                detalhes
                  ? "flex w-full justify-between items-center flex-col m-4"
                  : ""
              }`}
            >
              {/* TÍTULO */}
              <div
                className={`${
                  detalhes ? "flex w-[50%] gap-2 items-center" : ""
                }`}
              >
                {" "}
                <p
                  className={`${
                    detalhes ? "text-xl  " : "text-[13px] mt-3"
                  } text-black dark:text-white`}
                >
                  R${produto.title}
                </p>
                {/* PREÇO */}
                <p
                  className={`${
                    detalhes ? "text-[29px] font-bold underline" : "text-[18px]"
                  } text-black dark:text-white`}
                >
                  <i className={`${detalhes ? "text-" : "text-[12px]"}`}>R$</i>
                  {produto.preco}
                </p>
              </div>
              {!ja_no_carrinho ? (
                <button
                  className={`pi pi-plus bg-green-600 p-3 rounded-md ${
                    detalhes ? "w-[200px] text-lg" : "w-[30%]"
                  } hover:bg-green-800 mt-3`}
                  onClick={() => addProduct(produto)}
                ></button>
              ) : (
                <div
                  className={`flex items-center justify-center gap-2 mt-3 ${
                    detalhes ? "w-[200px]" : "w-full"
                  }`}
                >
                  <button
                    className="pi pi-plus bg-green-600 p-3 rounded-md w-[50%] hover:bg-green-800"
                    onClick={() => addProduct(produto)}
                  ></button>
                  <button
                    onClick={() => removeProduct(produto)}
                    className="pi pi-minus p-3 bg-red-600 rounded-md w-[50%] hover:bg-red-800"
                  ></button>
                </div>
              )}
            </div>

            {/* BOTÕES */}
          </div>
        );
      })}

      {/* BOTÕES VER MAIS / VER MENOS (somente lista normal) */}
      {!detalhes && (
        <div className="flex w-full justify-center items-center gap-5">
          {expandiu ? (
            <>
              {LIMITE_INICIAL < products.length && (
                <button
                  className="text-black dark:text-white hover:bg-black dark:hover:bg-white rounded-xl hover:text-white dark:hover:text-black p-2"
                  onClick={verMais}
                >
                  Ver mais
                </button>
              )}
              <button
                className="text-black dark:text-white hover:bg-black dark:hover:bg-white rounded-xl hover:text-white dark:hover:text-black p-2"
                onClick={verMenos}
              >
                Ver menos
              </button>
            </>
          ) : (
            <button
              className="text-black dark:text-white hover:bg-black dark:hover:bg-white rounded-xl hover:text-white dark:hover:text-black p-2"
              onClick={verMais}
            >
              Ver mais
            </button>
          )}
        </div>
      )}
    </div>
  );
}
