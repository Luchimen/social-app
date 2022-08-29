import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "../../profile/pages/ProfilePage";
import Header from "../../ui/Header";
import StoriesPage from "../page/StoriesPage";
export const StoriesRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StoriesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
