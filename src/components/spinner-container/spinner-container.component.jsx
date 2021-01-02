import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";

import * as S from './spinner-container.styles';

const SpinnerContainer = () => {
  return (
    <S.Container>
      <SyncLoader color='#aaa' size='15px' margin='10px' />
    </S.Container>
  );
}

export default SpinnerContainer;