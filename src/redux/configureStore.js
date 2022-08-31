import {
  combineReducers, applyMiddleware, compose, configureStore,
} from '@reduxjs/toolkit/query/react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { resultReducer } from './data/dataReducer';

const rootReducer = combineReducers({
  results: resultReducer,
});

const store = configureStore(rootReducer, compose(applyMiddleware(thunk, logger)));
export default store;
