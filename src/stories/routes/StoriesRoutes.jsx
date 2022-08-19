import { Routes, Route, Navigate } from "react-router-dom";
import StoriesPage from "../page/StoriesPage";
export const StoriesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StoriesPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
