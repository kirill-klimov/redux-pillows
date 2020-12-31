import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';

import * as S from './cart-item.styles';

const CartItem = ({ item, clearItemFromCart }) => {
  const { name, imageUrl, price, quantity } = item;
 return (
   <S.ItemContainer>
    <S.ItemIcon imageUrl={imageUrl} />
    <S.InfoContainer>
      <span>{name.length > 16 ? name.substring(0, 16).trim() + "..." : name}</span>  
      <span>{`${quantity} x $${price}`}</span>  
    </S.InfoContainer>
    <S.ClearButton onClick={ () => clearItemFromCart(item) } />
   </S.ItemContainer>
 );
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);