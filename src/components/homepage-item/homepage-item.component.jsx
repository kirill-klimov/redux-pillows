import React from 'react'

import * as S from './homepage-item.styles'

const HomePageItem = ({ title, routeName, items }) => {
  return (
    <S.ItemContainerLink to={`/shop/${routeName}`}>
      <S.BackgroundContainer imageUrl={items[0].imageUrl} />
      <S.TitleContainer>
        <span>{title}</span>
        <span>SHOP NOW</span>
      </S.TitleContainer>
    </S.ItemContainerLink>
  )
}

export default HomePageItem;