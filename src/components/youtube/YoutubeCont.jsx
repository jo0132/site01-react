import React from "react";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a href={`https://youtu.be/${youtube.id.videoId}`}>
        <img
          src={youtube.snippet.thumbnails.medium.url}
          alt={youtube.snippet.title}
        />
        <span>{youtube.snippet.title}</span>
      </a>
    </li>
  );
};
const YoutubeCont = ({ youtubes }) => {
  return (
    <div className="Youtube_cont Youtube__page container">
      <ul>
        {youtubes.map((youtube, index) => (
          <YoutubeItem key={index} youtube={youtube} />
        ))}
      </ul>
    </div>
  );
};

export default YoutubeCont;
