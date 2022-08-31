import {
  combineReducers, applyMiddleware, compose, configureStore,
} from '@reduxjs/toolkit/query/react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducerResult } from './news/resultReducer';

const rootReducer = combineReducers({
  results: reducerResult,
});

const store = configureStore(rootReducer, compose(applyMiddleware(thunk, logger)));
export default store;