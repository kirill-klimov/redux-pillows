import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import EmptyComponent from '../../components/empty/empty.component';

import * as S from './checkout-page.styles';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <S.PageContainer>
    
      <S.TableHeaderContainer>
        <S.TableHeader><span>Product</span></S.TableHeader>
        <S.TableHeader><span>Description</span></S.TableHeader>
        <S.TableHeader><span>Quantity</span></S.TableHeader>
        <S.TableHeader><span>Price</span></S.TableHeader>
        <S.TableHeader><span>Remove</span></S.TableHeader>
      </S.TableHeaderContainer>

      {
        Array.isArray(cartItems) && cartItems.length
        ?
        <div>
          <div>
            {
              cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
            }
          </div>
          <S.TotalContainer>
            <span>TOTAL: ${total}</span>
          </S.TotalContainer>
        </div>
        :
        <EmptyComponent />
      }

    </S.PageContainer>
  );
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  total: state.cart.cartItems.reduce((accumulator, current) => 
    accumulator += current.price * current.quantity 
  , 0)
})

export default connect(mapStateToProps)(CheckoutPage);