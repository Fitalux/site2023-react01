import React from 'react'

const Intro = (props) => {
  return (
    <section id="introSection" className={props.attr}>
        <h3 className="blind">추천 음악 소개</h3>
        <div className="intro__inner container">
            <div className="intro__title">
                <span>Recommend Music</span>
                <h3>아 진짜 뭐 듣지?</h3> 
                <p>일상의 한 부분을 채워줄<br /> 지극히 주관적인 취향의 음악 장르 추천</p>
            </div>
            <div className="intro__desc">
                <div>
                    <h4 className="icon-bg1">JAZZ</h4>
                    <p>차분하고 부드러운 음향과 길고 선형적인 멜로디를 가진 음악이 많아 독서, 공부, 명상, 작업 등 집중력이 필요하고, 안락한 분위기를 느끼고 싶을 때 듣기 좋습니다.</p>
                </div>
                <div>
                    <h4 className="icon-bg2">EDM</h4>
                    <p>클럽이나 페스티벌 같은 상업적인 파티 문화에서 쓰이는 전자 음악들을 통칭하는 단어로, 즐겁고 신나는 분위기를 느끼고 싶을 때 듣기 좋습니다.</p>
                </div>
                <div>
                    <h4 className="icon-bg3">POP SONG</h4>
                    <p>대중적인 음악이라는 뜻으로, 다양한 장르를 통칭합니다. 영미권 대중음악이라는 뜻도 있죠. 장르를 아우르기 때문에 분위기에 따라 골라듣기 좋습니다.</p>
                </div>
                <div>
                    <h4 className="icon-bg4">OST</h4>
                    <p>오리지널 사운드트랙(Original SoundTrack)'의 약자로, 해당 작품을 위해 새로 작곡된 음악을 뜻합니다. 몇 번이고 다시 보게 되는 작품을 떠올리게 합니다.</p>
                </div>
            </div>
        </div>
    </section>
);
}

export default Intro