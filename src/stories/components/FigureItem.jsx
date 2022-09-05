import React from "react";

const FigureItem = ({ photo }) => {
  console.log(photo);
  return (
    <figure
      className={
        photo === "" ? `post__figure post__figure__none` : `post__figure`
      }
    >
      <img src={photo} className="post__img" />
    </figure>
  );
};

export default FigureItem;
