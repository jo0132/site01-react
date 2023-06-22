import React from "react";

const youtuebeTag = [
  { name: "기욤뮈소" },
  { name: "j.k 롤링" },
  { name: "베르나르베르베르" },
  { name: "히가시노 게이고" },
  { name: "댄브라운" },
  { name: "무라카미 하루키" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <>
      <div className="Youtube_tag">
        <div>
          {youtuebeTag.map((tag, index) => (
            <button onClick={btnClick} key={index}>
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default YoutubeTag;
