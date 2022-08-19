import StoriesPage from "./stories/page/StoriesPage";
import { StoriesProvider } from "./context/StoriesProvider";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <StoriesProvider>
      <AppRouter />
    </StoriesProvider>
  );
};
