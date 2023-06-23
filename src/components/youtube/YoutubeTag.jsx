import React from 'react';

const youtubeTag = [
  { name: 'AJR' },
  { name: 'Taylor Swift' },
  { name: 'NF' },
  { name: 'Imagine Dragons' },
  { name: 'Coldplay' },
  { name: 'JAZZ' },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
