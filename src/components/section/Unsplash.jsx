import React from 'react';

const Unsplash = props => {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>Unsplash</h3>
          <p>음악과 딱 맞는 감성의 이미지 다운로드</p>
          <a href="/" className="button-green">
            보러가기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image01" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image02" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image03" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image04" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image05" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image06" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image07" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image08" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image09" />
          </div>
          <div>
            <img src="../../assets/images/unplash/unplash.jpg" alt="image10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
