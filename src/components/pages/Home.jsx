import React from 'react';
import Contents from '../layout/Contents';

import Slider from '../section/Slider';
import Intro from '../section/Intro';
import Image from '../section/Image';
import Card from '../section/Card';
import Youtube from '../section/Youtube';
import Unsplash from '../section/Unsplash';
import Movie from '../section/Movie';

function Home() {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap Neo5" />
        <Intro attr="intro__wrap section Neo5" />
        <Image attr="images__wrap section center Neo5" />
        <Card attr="cards__wrap section center Neo5 bg-blue" />
        <Youtube attr="youtube__wrap section Neo5" />
        <Unsplash attr="unsplash__wrap section Neo5" />
        <Movie attr="movie__wrap section Neo5" />
      </Contents>
    </>
  );
}

export default Home;
