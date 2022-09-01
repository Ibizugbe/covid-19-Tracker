import {
  combineReducers, applyMiddleware, configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { resultReducer } from './data/fetchData';

const rootReducer = combineReducers({
  result: resultReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk, logger),
);
export default store;
