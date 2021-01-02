import { createStore, applyMiddleware, compose } from 'redux';
import persistedReducer from './root-reducer'
import { persistStore } from 'redux-persist';
import { rootSaga } from './root-saga';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, thunk, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor }; 



