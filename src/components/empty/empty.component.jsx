import React from 'react';

import * as S from './empty.styles';

const imageUrl = 'https://i.ibb.cokP/sQz21/such-empty.png';
const image = new Image();
image.src = imageUrl;

const EmptyComponent = () => {
  return (
    <S.Container>
      <S.Image src={imageUrl} alt='Such empty' />
      <span>Such empty</span>
    </S.Container>
  );
}

export default EmptyComponent;