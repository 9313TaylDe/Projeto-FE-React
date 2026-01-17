import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login_Page = () => {
  const { user, Login, NewAccount } = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const [nome, setnome] = useState("");
  const [flip, setflip] = useState(false);

  return (
    <div id="loginpage" className="flex w-full  h-[99.99vh] ">
      <div className="[perspective:1000px] flex w-full h-full items-center justify-center group">
        <div
          className={`w-[30%] h-[390px] flex items-center justify-center border border-black rounded-3xl relative [transform-style:preserve-3d] transition-transform duration-1000 ${
            flip ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="bg-[#F7DEC8] opacity-80 shadow-black rounded-3xl shadow-2xl p-4 flex w-[100%] h-full absolute  flex-col inset-0 [backface-visibility:hidden]">
            <div className="flex w-full justify-between">
              <h2 className="text-black w-full flex items-center justify-center mb-14 text-3xl">
                Login
              </h2>
              <button
                className="pi pi-refresh [transform:rotateX(180deg)] text-black"
                onClick={() => setflip(!flip)}
              ></button>
            </div>

            <div className="flex flex-col w-full gap-2">
              <input
                className="placeholder:text-black text-black pl-2 cursor-pointer rounded-lg focus:bg-[#F7DEC9]"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />

              <input
                className="placeholder:text-black text-black pl-2 cursor-pointer rounded-lg focus:bg-[#F7DEC9]"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setsenha(e.target.value)}
              />

              <button
                className="bg-red-600 mt-5 rounded-lg hover:bg-red-500 cursor-pointer"
                onClick={() => Login(email, senha)}
              >
                Entrar
              </button>
            </div>
            <div className="mt-5">
              <h2>Conectar-se usando </h2>
              <div className="text-[20px] flex gap-2">
                <span className="pi pi-google text-[18px]"></span>
                <span className="pi pi-facebook text-[18px]"></span>
                <span className="pi pi-twitter text-[18px]"></span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#F7DEC8] opacity-80 flex shadow-black rounded-3xl shadow-2xl w-[100%] h-full absolute flex-col inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex justify-between w-full">
              {" "}
              <h2 className="text-black w-full items-center justify-center flex  mb-14 text-3xl">
                Cadastro
              </h2>
              <button
                onClick={() => setflip(!flip)}
                className="pi pi-refresh text-black"
              ></button>
            </div>
            <div className="flex flex-col w-full gap-2">
              <input
                className="placeholder:text-black text-black pl-2 cursor-pointer rounded-lg focus:bg-[#F7DEC9]"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />

              <input
                className="placeholder:text-black text-black pl-2 cursor-pointer rounded-lg focus:bg-[#F7DEC9]"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setsenha(e.target.value)}
              />
              <input
                className="placeholder:text-black text-black pl-2 cursor-pointer rounded-lg focus:bg-[#F7DEC9]"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setnome(e.target.value)}
              />

              <button
                className="bg-red-600 mt-5 rounded-lg cursor-pointer hover:bg-red-500"
                onClick={() => {
                  NewAccount(email, nome, senha);
                  setflip(!flip);
                }}
              >
                Cadastrar
              </button>
            </div>
            <div className="mt-5">
              <h2>Criar conta usando </h2>
              <div className="text-[20px] flex gap-2">
                <span className="pi pi-google text-[18px] cursor-pointer"></span>
                <span className="pi pi-facebook text-[18px] cursor-pointer"></span>
                <span className="pi pi-twitter text-[18px] cursor-pointer"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Page;
