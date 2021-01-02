import { all, call } from 'redux-saga/effects'
import shopSaga from './shop/shop.saga';

export function* rootSaga() {
  yield all([
    call(shopSaga)
  ]);
}
