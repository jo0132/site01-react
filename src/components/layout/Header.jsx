import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header
      id="header"
      className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
      role="heading"
      aria-level="1"
    >
      <div className="header__inner container">
        <h1 className="header__logo">
          <Link to="/">
            noji <em>감귤</em>
          </Link>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
            <li>
              <Link to="/member">소개</Link>
            </li>
            <li>
              <Link to="/port">작품</Link>
            </li>
            <li>
              <Link to="/youtube">유튜브</Link>
            </li>
            <li>
              <Link to="/unsplash">이미지</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
