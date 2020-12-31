import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleHidden } from '../../redux/cart/cart.actions'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';

import * as S from './cart-dropdown.styles'

const CartDropdown = ({ history, toggleHidden, cartItems }) => {
  console.log(cartItems);
  return (
    <S.CartItemsContainer>
      <S.ItemsContainer>
        {
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        }
      </S.ItemsContainer>
      <Button onClick={() => { 
        history.push('/checkout')
        toggleHidden()
      }}>CHECKOUT</Button>
    </S.CartItemsContainer>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggleHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartDropdown))