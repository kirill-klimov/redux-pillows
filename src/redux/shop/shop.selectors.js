import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectIsLoaded = createSelector(
  selectShop,
  shop => shop.isLoaded
);

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollection = collectionRouteName => createSelector(
  selectCollections,
  collections => collections.find(collection => collection.routeName === collectionRouteName)
);