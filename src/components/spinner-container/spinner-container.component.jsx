import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";

import * as S from './spinner-container.styles';

const SpinnerContainer = () => {
  return (
    <S.Container>
      <SyncLoader color='#aaa' size='15' margin='10' />
    </S.Container>
  );
}

export default SpinnerContainer;