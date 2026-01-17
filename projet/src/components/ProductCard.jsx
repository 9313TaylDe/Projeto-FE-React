import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Product_Img from "./Product_Img";
import Card from "./Product_CardId";
import products from "../services/products";
import { Link } from "react-router-dom";

export function ProductCard({ products = [] }) {
  const { cart, addProduct, removeProduct, validId } = useContext(CartContext);
  // quantidade inicial de cards visíveis
  const LIMITE_INICIAL = 12;

  const [quantidadeVisivel, setQuantidadeVisivel] = useState(LIMITE_INICIAL);
  const [expandiu, setexpandiu] = useState(0);

  const verMais = () => {
    setexpandiu(true);
    setQuantidadeVisivel((prev) => Math.min(prev + 12, products.length));
  };
  const verMenos = () => {
    setQuantidadeVisivel((prev) => {
      const novoValor = Math.max(prev - 12, LIMITE_INICIAL);
      if (novoValor === LIMITE_INICIAL) {
        setexpandiu(false);
      }
      return novoValor;
    });
  };

  return (
    <div className="flex w-full flex-wrap gap-3 p-2 justify-between items-center  ">
      {products.slice(0, quantidadeVisivel).map((produto) => {
        const ja_no_carrinho = cart.some((prod) => prod.id === produto.id);

        return (
          <Card
            key={produto.id}
            className="h-[340px]  w-[200px] hover:translate-y-1 hover:shadow-2xl shadow-2xl shadow-black dark:hover:shadow-white dark:shadow-slate-400 bg-white  dark:bg-black rounded-t-xl transition-all duration-[2000ms]"
            fret={
              <div className="flex flex-col p-1 h-full justify-between items-center">
                <div className=" rounded-lg w-full h-fit items-center flex justify-center">
                  <Product_Img
                    classname="h-[240px]  w-[200px] dark:invert object-cover transition-all duration-[2000ms]"
                    images={<img src={produto.img} />}
                  />
                </div>

                <div className="hover:text-gray-500  flex-col  w-[100%] h-[90px] text-[21px] flex items-center justify-start ">
                  <p className="text-[13px] text-black dark:text-white w-full flex transition-all duration-[1900ms]">
                    {produto.title}
                  </p>
                  <p className="text-[18px] w-full text-black dark:text-white font-semibold transition-all duration-[1900ms]">
                    <i className="text-[12px]">R$</i>
                    {produto.preco}
                  </p>
                </div>
                {!ja_no_carrinho ? (
                  <button
                    className="pi pi-plus bg-green-600 p-2 rounded-md w-[30%] hover:bg-green-800"
                    onClick={() => addProduct(produto)}
                  ></button>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2">
                    <button
                      className="pi pi-plus bg-green-600 p-2 rounded-md w-[30%] hover:bg-green-800"
                      onClick={() => addProduct(produto)}
                    ></button>
                    <button
                      onClick={() => removeProduct(produto)}
                      className="pi pi-minus p-2 bg-red-600 rounded-md w-[30%] hover:bg-red-800"
                    ></button>
                  </div>
                )}
              </div>
            }
            vers={(() => {
              return (
                <div>
                  <div className={`flex flex-wrap gap-2 w-full h-full z-50`}>
                    <Product_Img
                      classname="h-[283px]  w-[200px] dark:invert object-cover transition-all duration-[2000ms]"
                      images={<img src={produto.img} />}
                    />
                  </div>
                  <Link to={`/product-detalhes/${produto.id}`}>
                    Ver todos os detalhes
                  </Link>
                </div>
              );
            })()}
          />
        );
      })}
      <div className="flex w-full justify-center items-center gap-5 ">
        {expandiu && (
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
        )}
        {!expandiu && (
          <button
            className="text-black dark:text-white hover:bg-black dark:hover:bg-white rounded-xl hover:text-white dark:hover:text-black p-2"
            onClick={verMais}
          >
            Ver mais
          </button>
        )}
      </div>
    </div>
  );
}
