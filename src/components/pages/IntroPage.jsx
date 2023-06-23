import React from 'react';
import Contents from '../layout/Contents.jsx';
import ContTitle from '../layout/ContTitle.jsx';
import Intro from '../section/Intro.jsx';
import IntroCont from '../Intro/IntroCont.jsx';

const IntroPage = props => {
  return (
    <>
      <Contents>
        <ContTitle title="Intro" />
        <Intro />
        <IntroCont />
      </Contents>
    </>
  );
};

export default IntroPage;
