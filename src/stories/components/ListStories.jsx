import { useStories } from "../../hooks/useStories";
import ItemStory from "./ItemStory";

const ListStories = () => {
  const { stories } = useStories();
  return (
    <div className="list-stories">
      {stories.map((story) => (
        <ItemStory story={story} key={story.id} />
      ))}
    </div>
  );
};

export default ListStories;
