import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon.component'

import * as S from './header.styles'

const Header = () => {
 return (
  <S.HeaderContainer>
    <Link to='/'>
      <S.Logo />
    </Link>
    <S.OptionContainer>
      <S.OptionLink to='/shop'>SHOP</S.OptionLink>
      <S.OptionLink to='/about'>ABOUT</S.OptionLink>
      <CartIcon />
    </S.OptionContainer>
  </S.HeaderContainer>
 )
}

export default Header;