import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopReducer from './shop/shop.reducer' 
import cartReducer from './cart/cart.reducer'
 
const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;