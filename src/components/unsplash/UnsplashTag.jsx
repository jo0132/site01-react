import React from "react";

const unsplashTag = [
  { name: "book" },
  { name: "Genre" },
  { name: "Fiction" },
  { name: "Library" },
  { name: "Author" },
  { name: "Character" },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <>
      <div className="unsplash_tag">
        <div>
          {unsplashTag.map((tag, index) => (
            <button onClick={btnClick} key={index}>
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default UnsplashTag;
