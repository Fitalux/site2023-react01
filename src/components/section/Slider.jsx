import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Slider(props) {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">이미지 슬라이드</h2>
        <div className="slider__img">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    MUSIC
                    <br />
                    Recommend
                  </h3>
                  <p>요즘 들을 거 없나? 싶을 때 취향을 강타할 MUSIC</p>
                  <a href="/" className="more button-black">
                    더 보 기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/sliderIcon02.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon03.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon04.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slider s2 container">
                <div className="text">
                  <h3>
                    MUSIC
                    <br />
                    Recommend
                  </h3>
                  <p>요즘 들을 거 없나? 싶을 때 취향을 강타할 MUSIC</p>
                  <a href="/" className="more button-black">
                    더 보 기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/sliderIcon02.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon03.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon04.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slider s3 container">
                <div className="text">
                  <h3>
                    MUSIC
                    <br />
                    Recommend
                  </h3>
                  <p>요즘 들을 거 없나? 싶을 때 취향을 강타할 MUSIC</p>
                  <a href="/" className="more button-black">
                    더 보 기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/sliderIcon02.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon03.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon04.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
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
  );
}

export default Slider;
