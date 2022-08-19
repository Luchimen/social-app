import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";

import { StoriesRoutes } from "../stories/routes/StoriesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<StoriesRoutes />} />
      </Routes>
    </>
  );
};
