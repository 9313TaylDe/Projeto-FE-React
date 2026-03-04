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
  try {
    const response = await fetch("https://backend-1-jdsc.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: senha }),
    });

    if (!response.ok) {
      alert("Email ou senha inválidos");
      return;
    }

    const dados = await response.json();

    setuser(dados);
    localStorage.setItem("user", JSON.stringify(dados));

    navigate("/");
  } catch (error) {
    alert("Erro ao conectar ao servidor");
  }
};

const Logout = () => {
  localStorage.removeItem("user");
  setuser(null);
  navigate("/login");
};
  const NewAccount = async (email, nome, password) => {
  try {
    const response = await fetch("https://backend-1-jdsc.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, password }),
    });

    if (!response.ok) {
      alert("Erro ao cadastrar");
      return;
    }

    alert("Conta criada com sucesso!");
    navigate("/login");

  } catch (error) {
    alert("Erro ao conectar ao servidor");
  }
};

  return (
    <AuthContext.Provider value={{ user, LoginUser, Logout, NewAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
