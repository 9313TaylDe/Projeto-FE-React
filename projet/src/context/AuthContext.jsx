import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");

  const [user, setuser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setuser(JSON.parse(savedUser));
    }
  }, []);

  const LoginUser = async (email, senha) => {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const dados = await response.json();
    setuser(dados);
    const saved = JSON.parse(localStorage.getItem("saved"));

    localStorage.setItem("user", JSON.stringify(dados));
    navigate("/");
  };

  const Logout = () => {
    localStorage.removeItem("user");
    setuser(null);
    navigate("/login");
  };

  const NewAccount = async (email, nome, password) => {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha: password }),
    });

    const data = await response.json();
    setuser(data);
    localStorage.setItem("saved", JSON.stringify(data));
    alert("Conta cadastrada co sucesso");
    navigate("/login"); // volta para login
  };

  return (
    <AuthContext.Provider value={{ user, LoginUser, Logout, NewAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
