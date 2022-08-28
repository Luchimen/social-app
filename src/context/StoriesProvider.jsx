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
  //console.log(stories)
  
  const onLikeandUnlike=(id,option)=>{
    const newStories = stories.map((story) => {
      if (story.id === id) {  
        option === "like" ? story.like = story.like +1 : story.dislike = story.dislike+1
      }
      return story
    });
    setStories(newStories)
  }
  
  const onDelete = (id) => {
    const newStories = stories.filter((story) => story.id !== id);
    setStories(newStories);
  };

  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  return (
    <StoriesContext.Provider value={{ saveStory, onDelete, stories, onLikeandUnlike }}>
      {children}
    </StoriesContext.Provider>
  );
};

export { StoriesProvider };
export default StoriesContext;
