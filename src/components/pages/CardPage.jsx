import React from 'react';

import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import CardCont from '../card/cardCont';

function CardPage() {
  return (
    <Contents>
      <ContTitle title="POP SONG" />
      <CardCont />
    </Contents>
  );
}

export default CardPage;
