import { useStories } from "../../hooks/useStories";
const ItemStory = ({ story }) => {
  const { onDelete } = useStories();

  const fechaPublicacion = new Date(story.id);
  return (
    <div className="rounded-md shadow-md shadow-gray-300 my-5 post">
      <figure className="post__figure">
        <img src={story.photo} className="post__img" />
      </figure>
      <div className="post__texts">
        <p className="post__comment">{story.comment}</p>
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
