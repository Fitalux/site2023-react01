import React, { useEffect,useState } from 'react'
import Contents from '../layout/Contents';
import UnsplashSlider from '../unsplash/UnsplashSlider';
import UnsplashSearch from '../unsplash/UnsplashSearch';
import UnsplashTag from '../unsplash/UnsplashTag';
import UnsplashCont from '../unsplash/UnsplashCont';
import ContTitle from '../layout/ContTitle';

const UnsplashPage = () => {
  const [images, setImages] = useState([]);

  const search = async (query) => {
    await fetch(`https://api.unsplash.com/search/photos?client_id=I7ba-CzsJwZ63mWvfrS0T7KpHn56pL6ett68uoeQtIw&query=${query}&per_page=30`)
      .then(response => response.json())
      .then(result => setImages(result.results))
      .catch(error => console.log('error', error));
    };
  
  useEffect(()=>{       //값이 계속 바뀌기 때문
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://api.unsplash.com/photos?client_id=I7ba-CzsJwZ63mWvfrS0T7KpHn56pL6ett68uoeQtIw&per_page=30", requestOptions)
    .then(response => response.json())
    .then(result => setImages(result))
    .catch(error => console.log('error', error));
  },[]);

    return (
      <>
        <Contents>
          <ContTitle title='Unsplash'/>
          <UnsplashSlider/>
          <UnsplashSearch onSearch={search}/>
          <UnsplashTag/>
          <UnsplashCont images={images}/>
        </Contents  >
      </>
    );
  };

export default UnsplashPage;