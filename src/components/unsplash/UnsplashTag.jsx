import React from 'react';

const unsplashTag = [
  { name: 'Moon' },
  { name: 'Star' },
  { name: 'Milky Way' },
  { name: 'Ocen' },
  { name: 'Sunset' },
  { name: 'Sky' },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="unsplash__tag">
      <div>
        {unsplashTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
