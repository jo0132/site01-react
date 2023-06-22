import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import YoutubeSlider from "../youtube/YoutubeSlider";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeCont from "../youtube/YoutubeCont";
import YoutubeTag from "../youtube/YoutubeTag";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyD52jhFvem-G1E36FNmbTjmruaB8jtIt7M`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=%EC%B1%85%EC%9D%BD%EC%96%B4%EC%A3%BC%EB%8A%94%EB%82%A8%EC%9E%90%20%EA%B8%B0%EC%9A%A4%EB%AE%88%EC%86%8C&type=video&key=AIzaSyD52jhFvem-G1E36FNmbTjmruaB8jtIt7M"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Contents>
        <ContTitle title="youtude" />
        <YoutubeSlider youtubes={youtubes} />
        <YoutubeSearch onSearch={search} />
        <YoutubeTag onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
      </Contents>
    </>
  );
};

export default YoutubePage;
