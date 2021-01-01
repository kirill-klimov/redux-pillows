import { createStore, applyMiddleware, compose } from 'redux'
import persistedReducer from './root-reducer'
import { persistStore } from 'redux-persist';

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [logger, thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

const persistor = persistStore(store);

export { store, persistor }; 



