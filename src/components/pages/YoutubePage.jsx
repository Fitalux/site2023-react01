import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents.jsx';
import ContTitle from '../layout/ContTitle.jsx';
import YoutubeSearch from '../youtube/YoutubeSearch.jsx';
import YoutubeTag from '../youtube/YoutubeTag.jsx';
import YoutubeCont from '../youtube/YoutubeCont.jsx';

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async query => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}type=video&key=AIzaSyCqJS_h2cF5AWsJiFlnsxH90Mbm-vlZzxw`,
    )
      .then(response => response.json())
      .then(result => setYoutubes(result.items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=moontype=video&key=AIzaSyCqJS_h2cF5AWsJiFlnsxH90Mbm-vlZzxw',
    )
      .then(response => response.json())
      .then(result => setYoutubes(result.items))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="youtube" />
        <YoutubeSearch onSearch={search} />
        <YoutubeTag onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
      </Contents>
    </>
  );
};

export default Youtube;
