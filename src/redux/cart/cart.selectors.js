import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectIsHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulator, cartItem) => 
   accumulator + cartItem.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulator, current) => 
    accumulator += current.price * current.quantity 
  , 0)
)