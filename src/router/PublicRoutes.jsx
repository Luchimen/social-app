import { Navigate } from "react-router-dom";
import { useStories } from "../hooks/useStories";

export const PublicRoutes = ({ children }) => {
  const { userLogged } = useStories();
  const { logged } = userLogged;
  console.log(logged);
  return logged ? <Navigate to="/" /> : children;
};
