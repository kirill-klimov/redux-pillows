import { createStore, applyMiddleware } from 'redux'
import persistedReducer from './root-reducer'
import { persistStore } from 'redux-persist';

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [logger, thunk]

const store = createStore(persistedReducer, applyMiddleware(...middleware))

const persistor = persistStore(store);

export { store, persistor }; 