import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";

const MovieImg = ({ movie }) => {
  return (
    <div>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
      </a>
      <div className="desc">
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
};

const MovieSlider = ({ movies }) => {
  console.log({ movies });
  return (
    <div className="movie__slider">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieImg movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
