import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


    const slider = (props) => {
      return (
        <section id="sliderSection" className={props.attr}>
        <div className="slider__inner">
            <h2 className="blind">이미지 슬라이더</h2>
            
            <div className="slider__img">
            <Swiper
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Navigation, Pagination]}
            >
              <SwiperSlide>
              <div className="slider s1 container">
                  <div className="text">
                      <h3>NEW <br/> portfolio</h3>
                      <p>더 많이 읽을수록, 더 많은 것을 알게 됩니다.<br/>더 많이 배울수록, 더 많은 곳에 갈 수 있습니다.</p>
                      <a href="/" className="more button_orenge">더 알아보기</a>
                  </div>
                  <div className="img" aria-label="hidden">
                      <img src="./assets/images/slider/slider01.png" alt="이미지1" />
                      <img src="./assets/images/slider/slider02.png" alt="이미지2" />
                      <img src="./assets/images/slider/slider03.png" alt="이미지3" />
                  </div>
                  <div className="circle">
                      <span className="circle c1"></span>
                      <span className="circle c2"></span>
                      <span className="circle c3"></span>
                      <span className="circle c4"></span>
                      <span className="circle c5"></span>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s1 container">
                  <div className="text">
                      <h3>NEW <br/> portfolio</h3>
                      <p>더 많이 읽을수록, 더 많은 것을 알게 됩니다.<br/>더 많이 배울수록, 더 많은 곳에 갈 수 있습니다.</p>
                      <a href="/" className="more button_orenge">더 알아보기</a>
                  </div>
                  <div className="img" aria-label="hidden">
                      <img src="./assets/images/slider/slider01.png" alt="이미지1" />
                      <img src="./assets/images/slider/slider02.png" alt="이미지2" />
                      <img src="./assets/images/slider/slider03.png" alt="이미지3" />
                  </div>
                  <div className="circle">
                      <span className="circle c1"></span>
                      <span className="circle c2"></span>
                      <span className="circle c3"></span>
                      <span className="circle c4"></span>
                      <span className="circle c5"></span>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s1 container">
                  <div className="text">
                      <h3>NEW <br/> portfolio</h3>
                      <p>더 많이 읽을수록, 더 많은 것을 알게 됩니다.<br/>더 많이 배울수록, 더 많은 곳에 갈 수 있습니다.</p>
                      <a href="/" className="more button_orenge">더 알아보기</a>
                  </div>
                  <div className="img" aria-label="hidden">
                      <img src="./assets/images/slider/slider01.png" alt="이미지1" />
                      <img src="./assets/images/slider/slider02.png" alt="이미지2" />
                      <img src="./assets/images/slider/slider03.png" alt="이미지3" />
                  </div>
                  <div className="circle">
                      <span className="circle c1"></span>
                      <span className="circle c2"></span>
                      <span className="circle c3"></span>
                      <span className="circle c4"></span>
                      <span className="circle c5"></span>
                  </div>
              </div>
            </SwiperSlide>
          </Swiper>
            </div>
        </div>
    </section>

  )
}

export default slider