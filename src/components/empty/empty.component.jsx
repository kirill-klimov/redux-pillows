import React from 'react';
import imageSrc from '../../assets/such_empty.png';

import * as S from './empty.styles';

const EmptyComponent = () => {
  return (
    <S.Container>
      <S.Image src={imageSrc} alt='Such empty' />
      <span>Such empty</span>
    </S.Container>
  );
}

export default EmptyComponent;