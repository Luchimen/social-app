import { useContext } from "react";
import StoriesContext from "../context/StoriesProvider";

export const useStories = () => {
  return useContext(StoriesContext);
};
