import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { StoriesRoutes } from "../stories/routes/StoriesRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoutes>
              <AuthRouter />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <StoriesRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
