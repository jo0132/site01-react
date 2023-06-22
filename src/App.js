import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import IntroPage from "./components/pages/IntroPage.jsx";
import PortPage from "./components/pages/PortPage";
import YoutubePage from "./components/pages/YoutubePage";
import UnsplashPage from "./components/pages/UnsplashPage";
import MoviePage from "./components/pages/MoviePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header attr="{'Header__wrap section bg--blue NanumSquareNeo5'}" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Intro" element={<IntroPage />} />
          <Route path="/Port" element={<PortPage />} />
          <Route path="/youtube" element={<YoutubePage />} />
          <Route path="/unsplash" element={<UnsplashPage />} />
          <Route path="/movie" element={<MoviePage />} />
        </Routes>
        <Footer attr="{'footer__wrap section bg--blue NanumSquareNeo5'}" />
      </BrowserRouter>
    </>
  );
};

export default App;
