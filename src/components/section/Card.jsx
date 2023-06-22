import React from 'react'

const Card = (props) => {
  return (
    <section id="cardsSection" className={props.attr}>
        <h3>한 곡 듣는 동안 영화, 드라마, 소설이 스쳐 지나가는<br /> 분위기 깡패인 BEST 6</h3>
        <p>하이틴 청춘물, 느와르, 로맨스 드라마, 새드엔딩 영화, 빌런 영화까지</p>
        <div className="cards__inner container">
            <div className="cards__btn"></div>
            <div className="cards__cont">
                <div className="card">
                    <figure className="card__header">
                        <img src="../../assets/images/card/card01.png" alt="CruelSummer" />
                    </figure>
                    <div className="card__body">
                        <span>
                            <img src="../../assets/images/card/cardbody01.png" alt="Taylor Swift" />
                        </span>
                        <div>
                            <h4>Cruel Summer - Taylor Swift</h4>
                            <p>하이틴 청춘 드라마, 영화가 한 편 뚝딱<br />그러나 무조건 해피엔딩인 로맨스라는 착각은 금물</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <figure className="card__header">
                        <img src="../../assets/images/card/card02.png" alt="Kiss Me, Kill Me" />
                    </figure>
                    <div className="card__body">
                        <span>
                            <img src="../../assets/images/card/cardbody02.png" alt="ari hicks" />
                        </span>
                        <div>
                            <h4>Kiss Me, Kill Me - ari hicks</h4>
                            <p>느와르 영화 한 편 뚝딱. <br />너도 나와 함께 죽자는 점에서 피폐함이 최고</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <figure className="card__header">
                        <img src="../../assets/images/card/card03.png" alt="cheap sunglasses" />
                    </figure>
                    <div className="card__body">
                        <span>
                            <img src="../../assets/images/card/cardbody03.png" alt="John K" />
                        </span>
                        <div>
                            <h4>cheap sunglasses - John K</h4>
                            <p>로맨스 영화 한 편 뚝딱<br />짝사랑이 다 그렇듯이<br />별 거 아닌 일로 설레하고, 기대하고 실망하고, 울고</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards__cont">
                <div className="card">
                    <figure className="card__header">
                        <img src="../../assets/images/card/card04.png" alt="" />
                    </figure>
                    <div className="card__body">
                        <span>
                            <img src="../../assets/images/card/cardbody04.png" alt="" />
                        </span>
                        <div>
                            <h4>Monster - Eldon</h4>
                            <p>로맨스 영화에 좀비 한 스푼. <br /> 어쩐지 웜바디스가 떠오르는 곡이지만<br/>이 곡에서 Monster가 진짜 괴물이 아니라는 점</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <figure className="card__header">
                        <img src="../../assets/images/card/card05.png" alt="These Tears" />
                    </figure>
                    <div className="card__body">
                        <span>
                            <img src="../../assets/images/card/cardbody05.png" alt="Andy Grammer" />
                        </span>
                        <div>
                            <h4>These Tears - Andy Grammer</h4>
                            <p>새드엔딩 영화 한 편 뚝딱.<br/>슬프지만 이제 그만 마음에 묻고 <br/>보내주어야만 하는 누군가가 생각나는 곡.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <figure className="card__header">
                        <img src="../../assets/images/card/card06.png" alt="Bones" />
                    </figure>
                    <div className="card__body">
                        <span>
                            <img src="../../assets/images/card/cardbody06.png" alt="Imagine Dragons" />
                        </span>
                        <div>
                            <h4>Bones - Imagine Dragons</h4>
                            <p>빌런 영화 한 편 뚝딱. <br/> 자신감이 필요할 때 들어도 좋지만 <br/>어쩐지 빌런 영화가 자꾸 생각나는 분위기.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}

export default Card