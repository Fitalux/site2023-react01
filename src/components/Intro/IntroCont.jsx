import React from 'react';

const Intro = () => {
  return (
    <section id="introSection" className="section Neo5">
      <h3 class="blind">장르별 추천곡 & 추천 아티스트</h3>
      <div className="container">
        <div className="intro__cont">
          <div className="intro__box">
            <figure>
              <img src="../assets/images/intro/edm.png" alt="edm" />
            </figure>
            <div className="box__text">
              <h2>EDM</h2>
              <span>Alan Walker</span>
              <p>신나는 비트, 다양한 분위기의 EDM 대표 아티스트.</p>
              <p>The Drum, Darkside, All Fall Down</p>
              <a href="/">Listen</a>
            </div>
          </div>
          <div className="intro__box">
            <figure>
              <img src="../assets/images/intro/jazz.png" alt="edm" />
            </figure>
            <div className="box__text">
              <h2>JAZZ</h2>
              <span>JAZZ List</span>
              <p>차분한 피아노 선율로 재즈를 연주하는 아티스트.</p>
              <p>Autumn Leaves </p>
              <a href="/">Listen</a>
            </div>
          </div>
        </div>

        <div className="intro__cont">
          <div className="intro__box">
            <figure>
              <img src="../assets/images/intro/classic.png" alt="edm" />
            </figure>
            <div className="box__text">
              <h2>CLASSIC</h2>
              <span>차이코프스키</span>
              <p>잔잔한 밤처럼 여운이 남는 멜로디의 음악가</p>
              <p>사계, 바이올린 협주곡 1악장</p>
              <a href="/">Listen</a>
            </div>
          </div>
          <div className="intro__box">
            <figure>
              <img src="../assets/images/intro/newage.png" alt="edm" />
            </figure>
            <div className="box__text">
              <h2>NEW AGE</h2>
              <span>이루마</span>
              <p>잔잔하고 부드러운 선율의 만능 아티스트</p>
              <p>Letter, Indigo, Hope</p>
              <a href="/">Listen</a>
            </div>
          </div>
        </div>

        <div className="intro__cont">
          <div className="intro__box">
            <figure>
              <img src="../assets/images/intro/popsong.png" alt="edm" />
            </figure>
            <div className="box__text">
              <h2>HIPHOP</h2>
              <span>NF</span>
              <p>자극적이지 않은 담백하고 건전한 힙합 아티스트.</p>
              <p>HAPPY, MISTAKE</p>
              <a href="/">Listen</a>
            </div>
          </div>
          <div className="intro__box">
            <figure>
              <img src="../assets/images/intro/popsong.png" alt="edm" />
            </figure>
            <div className="box__text">
              <h2>POP SONG</h2>
              <span>AJR</span>
              <p>
                신나는 멜로디로 진중하고 다정한 <br />
                위로를 건네는 아티스트
              </p>
              <p>Karma, World's Smallest Violin</p>
              <a href="/">Listen</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
