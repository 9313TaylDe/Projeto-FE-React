import Login_Page from "../pages/Login_Page";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Cart } from "../pages/Cart";
import Product_Page_Show from "../components/Product_Page_Show";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login_Page />} />
      <Route path="/" element={<Home />} />
      <Route path="/product-detalhes/:id" element={<Product_Page_Show />} />
    </Routes>
  );
}
export default AppRoutes;
