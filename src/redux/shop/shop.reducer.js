import { ShopActionTypes } from './shop.types' 

const INITIAL_STATE = {
  collections: null,
  isLoaded: false,
  errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state
      }
    
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        collections: action.payload,
      }

    case ShopActionTypes.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }
  
    default:
      return state;

  }
}

export default shopReducer