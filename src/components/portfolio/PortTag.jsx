import React from "react";
import { Link } from "react-router-dom";
const PortTag = () => {
  return (
    <div className="port__btn container">
      <ul>
        <li className="active">
          <Link to="/">기욤뮈소</Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/">j.k롤링</Link>
        </li>
        <li>
          <Link to="/">히가시노 게이고</Link>
        </li>
      </ul>
    </div>
  );
};
export default PortTag;
