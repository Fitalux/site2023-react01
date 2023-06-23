import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              movie.poster_path || movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ) : (
          <img
            class="not_poster"
            src="../assets/images/movie/notPoster.png"
            alt={movie.title}
          />
        )}
      </a>
      <em>
        <span className="title">{movie.title}</span>
        <span className="star">
          {Math.floor(movie.vote_average * 100) / 100}
        </span>
      </em>
    </li>
  );
};

export default MovieItem;
