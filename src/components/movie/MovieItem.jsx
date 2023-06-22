import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <span className="title">{movie.title}</span>
        <span className="star">{movie.vote_average.toFixed(1)}</span>
      </a>
    </li>
  );
};

export default MovieItem;
