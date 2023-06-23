import React from 'react';

const movieTag = [
  { name: 'Comic' },
  { name: 'Horror' },
  { name: 'Fantasy' },
  { name: 'Musical' },
  { name: 'Action' },
];

const MovieTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="movie__tag">
      <div>
        {movieTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieTag;
