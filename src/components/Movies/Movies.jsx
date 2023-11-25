import React from "react";
import { useParams } from "react-router-dom";

const Movies = () => {
  const movie = useParams();
  return (
    <div>
      <h1>Movies {movie.id}</h1>
    </div>
  );
};

export default Movies;
