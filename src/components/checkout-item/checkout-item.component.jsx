import React from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  clearItemFromCart
} from '../../redux/cart/cart.actions';

import * as S from './checkout-item.styles';

const CheckoutItem = ({ item, addItem, removeItem, clearItemFromCart }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <S.ItemContainer>
      <S.ItemField> <S.ItemImage imageUrl={imageUrl} /> </S.ItemField>
      <S.ItemField> <span>{name}</span> </S.ItemField>
      <S.ItemField>
        <S.QuantityContainer>
          <span onClick={ () => removeItem(item) }>&#10094;</span>
          <span>{quantity}</span>
          <span onClick={ () => addItem(item) }>&#10095;</span>
        </S.QuantityContainer>
      </S.ItemField>
      <S.ItemField> <span>${price}</span> </S.ItemField>
      <S.ItemField onClick={ () => clearItemFromCart(item) }> <span>&#10005;</span> </S.ItemField>
    </S.ItemContainer>
  );
} 

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
