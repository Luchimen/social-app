import FormStory from "./FormStory";
import ListStories from "./ListStories";
const StoriesContainer = () => {
  return (
    <div className="stories-container">
      <FormStory />

      <ListStories />
    </div>
  );
};

export default StoriesContainer;
