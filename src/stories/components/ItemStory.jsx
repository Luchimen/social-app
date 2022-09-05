import { useStories } from "../../hooks/useStories";
import FigureItem from "./FigureItem";
const ItemStory = ({ story }) => {
  const { onDelete, onLikeandUnlike } = useStories();

  const fechaPublicacion = new Date(story.id);
  console.log(story);

  return (
    <div className="rounded-md shadow-md shadow-gray-300 my-5 post">
      <div
        className={
          story.photo.length === 0 ? "post__container__none" : "photo__container"
        }
      >
        {story.photo.length !== 0 &&
          story.photo.map((photo, index) => (
            <FigureItem photo={photo} key={index} />
          ))}
      </div>

      <div className="post__texts">
        <p className="post__comment">{story.comment}</p>
        <div className="post__reaction">
          <button id="like" onClick={() => onLikeandUnlike(story.id, "like")}>
            <i className="bx bxs-like"></i>
          </button>
          <label type="number" id="inputlike">
            {story.like}
          </label>
          <button
            id="dislike"
            onClick={() => onLikeandUnlike(story.id, "dislike")}
          >
            <i className="bx bxs-dislike"></i>
          </button>
          <label type="number" id="inputdislike">
            {story.dislike}
          </label>
        </div>
        <p className="post__date">
          Fecha de publicación: {fechaPublicacion.toLocaleDateString()}
        </p>
      </div>
      <button className="post__btneliminar" onClick={() => onDelete(story.id)}>
        Eliminar publicación
      </button>
    </div>
  );
};

export default ItemStory;
