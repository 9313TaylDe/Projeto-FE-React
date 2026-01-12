import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setuser(JSON.parse(savedUser));
    }
  }, []);

  const Login = (email, senha) => {
    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    const saved = JSON.parse(localStorage.getItem("saved"));

    if (saved && saved.email === email && saved.senha === senha) {
      setuser(saved);
      localStorage.setItem("user", JSON.stringify(saved));
      navigate("/");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  const Logout = () => {
    localStorage.removeItem("user");
    setuser(null);
    navigate("/login");
  };

  const NewAccount = (email, nome, senha) => {
    if (!email || !nome || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    const data = { email, nome, senha };

    alert("Conta criada com sucesso!");

    localStorage.setItem("saved", JSON.stringify(data));

    navigate("/login"); // volta para login
  };

  return (
    <AuthContext.Provider value={{ user, Login, Logout, NewAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
