import { createContext } from "react";
import { useEffect, useState } from "react";
const StoriesContext = createContext();

const StoriesProvider = ({ children }) => {
  const [stories, setStories] = useState(
    JSON.parse(localStorage.getItem("stories")) || []
  );
  const saveStory = (story) => {
    const newStory = {
      id: Date.now(),
      ...story,
    };
    setStories([...stories, newStory]);
  };
  const onDelete = (id) => {
    const newStories = stories.filter((story) => story.id !== id);
    setStories(newStories);
  };
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  return (
    <StoriesContext.Provider value={{ saveStory, onDelete, stories }}>
      {children}
    </StoriesContext.Provider>
  );
};

export { StoriesProvider };
export default StoriesContext;
