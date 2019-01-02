import colorReducer from './colorReducer';
// import apiReducer from './apiReducer';

import { applyMiddleware, combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  colorReducer,
  // apiReducer
})

export default rootReducer;