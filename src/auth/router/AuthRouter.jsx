import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Perfil } from "../../auth/pages/Perfil";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
