import React from "react";
import { Link } from "react-router-dom";

const Youtube = () => {
  return (
    <section id="youtubeSection" className="youtube__wrap section">
      <div className="youtube__inner container">
        <div className="text">
          <h3>YOUTUBE</h3>
          <p>
            바쁜 분들을 위해 책을 읽어주는 유투버들이 있습니다.
            <br />
            방문하시고 구독과 좋아요! 부탁드립니다.
          </p>
          <Link to="/" className="button_vie">
            자세히 보기
          </Link>
        </div>
        <div className="youtube__item">
          <div>
            <img
              src="/assets/images/youtube/youtube07.png"
              alt="유투브 이미지07"
            />
          </div>
          <div>
            <img
              src="/assets/images/youtube/youtube08.png"
              alt="유투브 이미지08"
            />
          </div>
          <div>
            <img
              src="/assets/images/youtube/youtube09.png"
              alt="유투브 이미지09"
            />
          </div>
          <div>
            <img
              src="/assets/images/youtube/youtube10.png"
              alt="유투브 이미지10"
            />
          </div>
          <div>
            <img
              src="/assets/images/youtube/youtube11.png"
              alt="유투브 이미지11"
            />
          </div>
          <div>
            <img
              src="/assets/images/youtube/youtube12.png"
              alt="유투브 이미지12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
