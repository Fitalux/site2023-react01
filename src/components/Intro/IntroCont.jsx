import React from 'react';

const Intro = () => {
  return (
    <section id="introSection" className="section Neo5">
      <h3 class="blind">재즈</h3>
      <div className="container">
        <div class="intro__main">
          <div class="intro__main__title">JAZZ</div>
          <div class="intro__main__text">
            <span class="first__text">
              <strong>재즈란?</strong>
            </span>
            <p>
              19세기 후반에서 20세기 초 미국 루이지애나 주 뉴올리언스의
              아프리카계 미국인 문화에서 탄생해 20세기 초반에서 중반까지
              전세계적으로 크게 유행한 음악 장르이다. <br />
              유럽의 악기와 음악적 틀을 기반으로 아프리카의 리듬과 화성, 그리고
              아프리카계 미국인 특유의 감성, 그리고 새로운 음악적 시도 등이
              혼합된 장르인데,
              <br />
              연주를 할 때는 기존 클래식의 엄격함과 정형성에서 탈피하여,
              즉흥적인 면과 변화 및 다양성을 강조한다.
              <br />
              클래식 음악과 같은 엄격한 악보나 매우 규격화된 형식 등에서 상당히
              벗어나 있으며, 음악적 즉흥석이 강해 작곡이나 연주가 난이도 높은
              장르로 유명하다.
            </p>
            <span>
              주요 사용 악기에는
              <strong>
                드럼, 콘트라베이스, 베이스 기타, 일렉트릭 기타, 어쿠스틱 기타,
                피아노, 색소폰, 트럼펫, 트럼본, 클라리넷
              </strong>
              등이 있다.
            </span>
          </div>
        </div>
        <h1 class="intro__title">JAZZ PLAY LIST</h1>
        <div className="intro__cont">
          <div className="intro__box">
            <div className="box__text">
              <h2>The Days Of Wine And Roses</h2>
              <span>Frank Sinatra</span>
              <a href="https://www.youtube.com/watch?v=RmHkaCAt9vM">Listen</a>
            </div>
          </div>
          <div className="intro__box">
            <div className="box__text">
              <h2>Autumn Leaves</h2>
              <span>Joseph Kosma</span>
              <a href="https://www.youtube.com/watch?v=ty_LDBaE7gw">Listen</a>
            </div>
          </div>
        </div>

        <div className="intro__cont">
          <div className="intro__box">
            <div className="box__text">
              <h2>The Way You Look Tonight</h2>
              <span>Frank Sinatra</span>
              <a href="/">Listen</a>
            </div>
          </div>
          <div className="intro__box">
            <div className="box__text">
              <h2>Blue And Sentimental Mood</h2>
              <span>Teddy Powell</span>
              <a href="/">Listen</a>
            </div>
          </div>
        </div>

        <div className="intro__cont">
          <div className="intro__box">
            <div className="box__text">
              <h2>Over the Rainbow</h2>
              <span>Harold Arlen(작곡), Yip Harburg(작사)</span>
              <a href="https://youtu.be/PSZxmZmBfnU">Listen</a>
            </div>
          </div>
          <div className="intro__box">
            <div className="box__text">
              <h2>Dream A Little Dream Of Me</h2>
              <span>Doris Day</span>
              <a href="https://www.youtube.com/watch?v=h7j8wa9sWOE">Listen</a>
            </div>
          </div>
        </div>

        <div className="intro__cont">
          <div className="intro__box">
            <div className="box__text">
              <h2>How High The Moon</h2>
              <span>Ella Fitzgerald</span>
              <a href="https://www.youtube.com/watch?v=djZCe7ou3kY">Listen</a>
            </div>
          </div>
          <div className="intro__box">
            <div className="box__text">
              <h2>Bluesette</h2>
              <span>Toots Thielemans</span>
              <a href="https://www.youtube.com/watch?v=yKnG_9q4crA">Listen</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
