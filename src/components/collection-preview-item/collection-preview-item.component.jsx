import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

import * as S from './collection-preview-item.styles';

const CollectionPreviewItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <S.PreviewItemContainer>
      <S.ItemImage imageUrl={imageUrl} />
      <S.InfoContainer>
        <span>{name}</span>
        <span>{`$${price}`}</span>
      </S.InfoContainer>
      <S.ItemButton reversed onClick={() => addItem(item)}>ADD TO CART</S.ItemButton>
    </S.PreviewItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)) 
})

export default connect(null, mapDispatchToProps)(CollectionPreviewItem);