import React from 'react'

const MovieItem = ({ movie }) => {
    return (
      <li>
          <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </a>
          <em>
            <span className='title'>{movie.title}</span>
            <span className='star'>{Math.floor((movie.vote_average)*100)/100}</span>
          </em>
      </li>
    );
  };

export default MovieItem;