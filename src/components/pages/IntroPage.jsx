import React from 'react';
import Contents from '../layout/Contents.jsx';
import ContTitle from '../layout/ContTitle.jsx';
import IntroCont from '../Intro/IntroCont.jsx';

const IntroPage = props => {
  return (
    <>
      <Contents>
        <ContTitle title="JAZZ" />
        <IntroCont />
      </Contents>
    </>
  );
};

export default IntroPage;
