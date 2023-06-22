import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

const YoutubeImg = ({ youtube }) => {
  return (
    <a href={`https://youtu.be/${youtube.id.videoId}`}>
      <img
        src={youtube.snippet.thumbnails.medium.url}
        alt={youtube.snippet.title}
      />
    </a>
  );
};

const YoutubeSlider = ({ youtubes }) => {
  console.log({ youtubes });
  return (
    <div className="youtube__slider">
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
      >
        {youtubes.map((youtube, index) => (
          <SwiperSlide key={index}>
            <YoutubeImg youtube={youtube} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YoutubeSlider;
