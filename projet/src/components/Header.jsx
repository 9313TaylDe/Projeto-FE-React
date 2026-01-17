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
      className={`shadow-[0_0_15px_4px] rounded-md shadow-black transition-all duration-[2000ms] ${
        dark ? "bg-[#0f172a]" : "bg-[#fff]"
      } h-[70px] flex w-[98.5%] p-1 pr-3 pl-3 text-center items-center relative justify-between`}
    >
      <div className="text-black relative  z-50 w-[11%] ">
        <button
          className="w-full text-2xl text-black dark:text-white transition-all duration-700"
          onClick={() => setopenmenu(!openMenu)}
        >
          Menu
        </button>

        <ul
          className={`flex flex-col justify-start items-start rounded-r-lg
      w-[100%] z-50  bg-[#0f172a] dark:bg-[#eee] duration-[1s]  absolute top-1
      transition-all  ease-in-out h-[300px] border
      ${
        openMenu
          ? "-translate-x-[28px] p-4 opacity-100 top-1"
          : "-translate-x-44 opacity-0 top-1 duration-1000 transition-all"
      }
    `}
        >
          <h2 className="mb-3 border-b border-b-black dark:border-b-white  text-white  dark:text-black">
            Menu
          </h2>
          <li
            className="hover:bg-gray-500 text-white dark:text-black w-full flex text-left"
            onClick={() => setopenmenu(false)}
          >
            Camisas
          </li>
          <li
            className="hover:bg-gray-500 text-white dark:text-black  w-full flex text-left"
            onClick={() => setopenmenu(false)}
          >
            Fones
          </li>
          <li
            className="hover:bg-gray-500 text-white dark:text-black  w-full flex text-left"
            onClick={() => setopenmenu(false)}
          >
            Carregadores
          </li>
          <li
            className="hover:bg-gray-500 text-white dark:text-black  w-full flex text-left"
            onClick={() => setopenmenu(false)}
          >
            Películas
          </li>
          <li
            className="hover:bg-gray-500 text-white dark:text-black  w-full flex text-left"
            onClick={() => setopenmenu(false)}
          >
            Cabos
          </li>
        </ul>
      </div>

      <nav className="flex w-[40%] h-full items-center justify-between">
        <div className="flex w-[50%] h-full gap-4">
          <button
            className={`text-2xl ${
              dark ? "text-white   pi pi-sun" : "text-black pi pi-moon"
            }`}
            onClick={() => setdark(!dark)}
          ></button>
          <button
            className="pi pi-power-off text-2xl text-black dark:text-white"
            onClick={Logout}
          ></button>
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
