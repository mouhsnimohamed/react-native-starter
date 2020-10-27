import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducers from './root.reducers';
import rootSagas from './root.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const middlewareEnhancer = applyMiddleware(...middlewares);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducers, undefined, composedEnhancers);

if (Array.isArray(rootSagas)) {
  rootSagas.forEach((saga) => sagaMiddleware.run(saga));
}

export default store;
