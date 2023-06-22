import React from "react";
import { Link } from "react-router-dom";

const Portfolio = (props) => {
  return (
    <section id="portSection" className={props.attr}>
      <h3>한국인이 좋아하는 외국소설</h3>
      <p>그동안 한국인들이 좋아하는 외국 소설입니다.</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li className="active">
              <Link to="/">기욤뮈소</Link>
            </li>
            <li>
              <Link to="/">베르나르베르베르</Link>
            </li>
            <li>
              <Link to="/">j.k롤링</Link>
            </li>
            <li>
              <Link to="/">히가시노 게이고</Link>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book01.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img
                  src="./assets/images/Member/peep-27-1.svg"
                  alt="멤버사진1"
                />
              </div>
              <div>
                <h4>고양이</h4>
                <p>베르나르 베르베르</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book02.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img
                  src="./assets/images/Member/peep-27-1.svg"
                  alt="멤버사진1"
                />
              </div>
              <div>
                <h4>파피용</h4>
                <p>베르나르 베르베르</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book03.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img
                  src="./assets/images/Member/peep-27-1.svg"
                  alt="멤버사진1"
                />
              </div>
              <div>
                <h4>제3인류</h4>
                <p>베르나르 베르베르</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book04.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>당신거기 있어줄래요?</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book05.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>구해줘</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book06.png" alt="포폴사진" />
            </figure>
            <div className="port__body">
              <div>
                <img src="./assets/images/Member/peep-54.svg" alt="멤버사진1" />
              </div>
              <div>
                <h4>센 강의 이름모를 여인</h4>
                <p>기욤 뮈소</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
