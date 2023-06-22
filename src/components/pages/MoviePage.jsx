import React, { useEffect, useState } from "react";

import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import MovieSlider from "../movie/MovieSlider";
import MovieSearch from "../movie/MovieSearch";
import MovieCont from "../movie/MovieCont";
import MovieTag from "../movie/MovieTag";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const searchByGenre = async (genreId) => {
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=5db8e243a83e03b0e4f83c2e8e042370&language=ko-kr&with_genres=${genreId}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((err) => console.error(err));
  };

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5db8e243a83e03b0e4f83c2e8e042370&language=ko-kr&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=5db8e243a83e03b0e4f83c2e8e042370&language=ko-kr"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="movie" />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieTag onSearch={searchByGenre} />
        <MovieCont movies={movies} />
      </Contents>
    </>
  );
};

export default MoviePage;
