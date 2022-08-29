import { Navigate } from "react-router-dom";
import { useStories } from "../hooks/useStories";
export const PrivateRoutes = ({ children }) => {
  const { userLogged } = useStories();
  const { logged } = userLogged;
  return logged ? children : <Navigate to="/auth/" />;
};
