import React from "react";
import { Link } from "react-router-dom";

const Unsplash = () => {
  return (
    <section id="unsplashSection" className="unsplash__wrap section">
      <div className="unsplash__inner container">
        <div className="text">
          <h3>UNSPLASH</h3>
          <p>
            더 다양한 이미지는는 unsplash를 통해 제공하고 있습니다.
            <br />
            방문하셔서 더많은 이미지를 만나보세요!
          </p>
          <Link to="#" className="button_bule">
            자세히 보기
          </Link>
        </div>
        <div className="unsplash__item">
          <div>
            <img
              src="/assets/images/unsplash/unsplash07.png"
              alt="언스플리쉬 이미지07"
            />
          </div>
          <div>
            <img
              src="/assets/images/unsplash/unsplash08.png"
              alt="언스플리쉬 이미지08"
            />
          </div>
          <div>
            <img
              src="/assets/images/unsplash/unsplash09.png"
              alt="언스플리쉬 이미지09"
            />
          </div>
          <div>
            <img
              src="/assets/images/unsplash/unsplash10.png"
              alt="언스플리쉬 이미지10"
            />
          </div>
          <div>
            <img
              src="/assets/images/unsplash/unsplash11.png"
              alt="언스플리쉬 이미지11"
            />
          </div>
          <div>
            <img
              src="/assets/images/unsplash/unsplash12.png"
              alt="언스플리쉬 이미지12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
