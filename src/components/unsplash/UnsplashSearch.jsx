import React, { useRef } from 'react';

const UnsplashSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="unsplash__search container">
      <h2 className="blind">이미지 검색</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="검색어를 입력하세요"
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
};

export default UnsplashSearch;
