import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import Reactotron from 'reactotron-react-native';
import rootReducers from './root.reducers';
import rootSagas from './root.sagas';

const sagaMonitor = Reactotron.createSagaMonitor?.();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware, logger];

const middlewareEnhancer = applyMiddleware(...middlewares);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducers, undefined, composedEnhancers);

if (Array.isArray(rootSagas)) {
  rootSagas.forEach((saga) => sagaMiddleware.run(saga));
}

export default store;
