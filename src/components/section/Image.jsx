import React from 'react'

const Image = (props) => {
  return (
    <section id="imagesSection" className={props.attr}>
        <h3>Recommend Music Best 3</h3>
        <p>상황별로 꼭 권유하고 싶은 노래 TOP 3</p>
        <div className="images__inner container">
           <div className="image">
                <figure className="image__header">
                    <img src="../../assets/images/img/image01.png" alt="drive" />
                </figure>
                <div className="image__body">
                    <h4>Green Green Grass <br /> George Ezra<br /><br /></h4>
                    <p>-화창한 여름, 창문을 열고 시원한 바람을 만끽하며 드라이브 할 때<br />-실내지만 드라이브 하는 기분을 내고 싶을 때</p>
                    <a href="https://www.youtube.com/watch?v=VQeW62X8rEA" className="btn"><br />Listen<br /></a>
                </div>
           </div>
           <div className="image">
                <figure className="image__header">
                    <img src="../../assets/images/img/image02.png" alt="brunout" />
                </figure>
                <div className="image__body">
                    <h4>Breathe In Breathe Out <br /> Blanks<br /><br /></h4>
                    <p>-현대인이라면 한 번쯤 겪는 번아웃을 이겨낼 때<br />-지치는 하루, 훌쩍 여행을 떠나고 싶을 때</p>
                    <a href="https://www.youtube.com/watch?v=UvaafKCTrvM" className="btn"><br />Listen<br /></a>
                </div>
            </div>
            <div className="image">
                <figure className="image__header">
                    <img src="../../assets/images/img/image03.png" alt="hopes" />
                </figure>
                <div className="image__body">
                    <h4>High Hopes <br /> Panic! At The Disco<br /><br /></h4>
                    <p>포기하고 싶고, 지쳐서 넘어질 것 같지만 지금까지 걸어온 길을 생각하며 마음을 다잡을 때<br /></p>
                    <a href="https://www.youtube.com/watch?v=IPXIgEAGe4U" className="btn"><br />Listen<br /></a>
                </div>
            </div>
        </div>
    </section>
);
}

export default Image