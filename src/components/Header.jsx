import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "primeicons/primeicons.css";
import { CartContext } from "../context/CartContext";
const Header = () => {
  const [openMenu, setopenmenu] = useState(false);
  const [dark, setdark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const { Logout } = useContext(AuthContext);
  const { cart, clearCart } = useContext(CartContext);
  return (
    <header
      className={`transition-all duration-[2000ms] ${
        dark ? "bg-[#0f172a]" : "bg-[#fff]"
      } h-[70px] flex w-full p-1 pr-3 pl-3 text-center items-center relative justify-between`}
    >
      <div className="text-black relative  z-50 w-[9%] ">
        <button
          className="w-full text-black dark:text-white transition-all duration-700"
          onClick={() => setopenmenu(!openMenu)}
        >
          Menu
        </button>

        <ul
          className={`
      w-[100%] z-50 b-black dark:bg-[#0f172a] duration-[2s]  absolute top-0
      transition-all  ease-in-out h-[300px] border
      ${
        openMenu
          ? "-translate-x-3.5 p-4 opacity-100"
          : "-translate-x-44 opacity-0"
      }
    `}
        >
          <h2 className="mb-3 border-b border-b-black dark:border-b-white  text-black dark:text-white">
            Menu
          </h2>
          <li
            className="hover:bg-gray-500 text-black dark:text-white"
            onClick={() => setopenmenu(false)}
          >
            Camisas
          </li>
          <li
            className="hover:bg-gray-500 text-black dark:text-white"
            onClick={() => setopenmenu(false)}
          >
            Fones
          </li>
          <li
            className="hover:bg-gray-500 text-black dark:text-white"
            onClick={() => setopenmenu(false)}
          >
            Carregadores
          </li>
          <li
            className="hover:bg-gray-500 text-black dark:text-white"
            onClick={() => setopenmenu(false)}
          >
            Películas
          </li>
          <li
            className="hover:bg-gray-500 text-black dark:text-white"
            onClick={() => setopenmenu(false)}
          >
            Cabos
          </li>
        </ul>
      </div>

      <nav className="flex w-[50%] h-full items-center justify-between">
        <div className="flex w-[50%] h-full">
          <button className="pi pi-power-off" onClick={Logout}></button>
          <button
            className={`${dark ? "text-white" : "text-black"}`}
            onClick={() => setdark(!dark)}
          >
            {dark ? "Light" : "Sun"}
          </button>
        </div>
        <i className="pi pi-user text-3xl  hover:text-gray-600 cursor-pointer text-black dark:text-white transition-all duration-700"></i>
        <i className="h-fit  flex p-1">
          <i className="relative pi pi-shopping-cart text-3xl cursor-pointer hover:text-gray-600 text-black dark:text-white transition-all duration-700">
            <i className="absolute w-[25px] h-[25px] bg-pink-600 left-3 -top-3 rounded-full">
              <i className="text-[16px] absolute top-[2.5px] left-[7.9px]">
                {cart.length}
              </i>
            </i>
          </i>
        </i>
        <i
          onClick={clearCart}
          className="text-black dark:text-white transition-all duration-700"
        >
          Limpar carrinho
        </i>
      </nav>
    </header>
  );
};

export default Header;
