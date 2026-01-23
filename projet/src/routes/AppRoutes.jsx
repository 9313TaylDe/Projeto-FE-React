import Login_Page from "../pages/Login_Page";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Cart } from "../pages/Cart";
import Product_Page_Show from "../pages/Products_Details";
import RoutesProtected from "./RoutesProtected";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login_Page />} />
      <Route
        path="/"
        element={
          <RoutesProtected>
            <Home />
          </RoutesProtected>
        }
      />
      <Route
        path="/product-detalhes/:id"
        element={
          <RoutesProtected>
            <Product_Page_Show />
          </RoutesProtected>
        }
      />
    </Routes>
  );
}
export default AppRoutes;
