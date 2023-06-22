import React from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  return (
    <section id="moviesSection" className="movies__wrap section">
      <div className="movies__inner container">
        <div className="text">
          <h3>MOVIES</h3>
          <p>책을 원작으로 한 영화가 있습니다. 더많은 영화를를 만나보세요!</p>
          <Link to="#" className="button_orenge">
            자세히 보기
          </Link>
        </div>
        <div className="movies__item">
          <div>
            <img src="/assets/images/movie/movies07.png" alt="영화 이미지07" />
          </div>
          <div>
            <img src="/assets/images/movie/movies08.png" alt="영화 이미지08" />
          </div>
          <div>
            <img src="/assets/images/movie/movies09.png" alt="영화 이미지09" />
          </div>
          <div>
            <img src="/assets/images/movie/movies10.png" alt="영화 이미지10" />
          </div>
          <div>
            <img src="/assets/images/movie/movies11.png" alt="영화 이미지11" />
          </div>
          <div>
            <img src="/assets/images/movie/movies12.png" alt="영화 이미지12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
