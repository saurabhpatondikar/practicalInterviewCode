import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducer';

const middleware = [thunkMiddleware];


export const store = createStore(
  combineReducers,
  applyMiddleware(...middleware),
);
