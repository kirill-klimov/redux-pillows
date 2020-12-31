import { ShopActionTypes } from './shop.types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
})

export const fetchCollectionsError = error => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_ERROR,
  payload: error
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionsRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())
    collectionsRef
    .get()
    .then(snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot)
      console.log(collections);
      dispatch(fetchCollectionsSuccess(collections))
    })
    .catch(error => {
      dispatch(fetchCollectionsError(error))
    })
  }
}