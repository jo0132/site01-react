import React from "react";
import MovieItem from "./MovieItem";

const MovieCont = ({ movies }) => {
  return (
    <div className="movies__cont movies___page container">
      <ul>
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;
