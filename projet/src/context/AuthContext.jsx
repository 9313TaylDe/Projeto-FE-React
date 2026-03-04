import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // LOGIN
  const LoginUser = async (email, password) => {
    try {
      const response = await fetch(
        "https://backend-1-jdsc.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Erro no login");
        return;
      }

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (error) {
      alert("Erro ao conectar ao servidor");
      console.error(error);
    }
  };

  // CADASTRO
  const NewAccount = async (nome, email, password) => {
    try {
      const response = await fetch(
        "https://backend-1-jdsc.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Erro ao cadastrar");
        return;
      }

      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao conectar ao servidor");
      console.error(error);
    }
  };

  // LOGOUT
  const Logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, LoginUser, Logout, NewAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
