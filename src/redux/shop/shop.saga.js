import { takeLatest, put, call, all } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { 
  fetchCollectionsSuccess,
  fetchCollectionsError
} from './shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

function* fetchCollectionsStartAsync() {
  try {
    const collectionsRef = firestore.collection('collections')
    const snapshot = yield collectionsRef.get();
    const collections = yield call(convertCollectionsSnapshotToMap, snapshot)
    put(fetchCollectionsSuccess(collections))
  } catch (error) {
    put(fetchCollectionsError(error))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);
}

export default function* shopSaga() {
  yield all([ call(fetchCollectionsStart) ]);
}