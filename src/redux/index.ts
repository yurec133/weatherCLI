import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from './reducer';
import {weatherWatcher} from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  weatherReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(weatherWatcher);
