import React from 'react';
import { Link } from 'react-router-dom';

const MovieTitle = {
  title: '영화 추천',
  subtitle: '소개한 곡들을 듣다보면 슬그머니 생각나는 영화',
};

const MovieDesc = [
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '하이스쿨 뮤지컬',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '느와르물',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '웜바디스',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '테일러스위프트그배경영화',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '할리퀸나오는거',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '스파이더맨',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '나쁜녀석들',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '윌터의 상상은 현실이 된다',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '미생',
  },
  {
    img: '../../assets/images/movie/movie.jpg',
    title: '조커 나오는 거',
  },
];

function MovieItem({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

function MovieSection(props) {
  return (
    <section id="moviesSection" className={props.attr}>
      <div className="movies__inner container">
        <div className="movies__text">
          <h3>{MovieTitle.title}</h3>
          <p>{MovieTitle.subtitle}</p>
          <Link to="/" className="button-black">
            보러가기
          </Link>
        </div>
        <div className="movies__item">
          {MovieDesc.map((text, index) => (
            <MovieItem key={index} img={text.img} title={text.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieSection;
