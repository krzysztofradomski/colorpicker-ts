import colorReducer from './colorReducer';
import apiReducer from './apiReducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  color: colorReducer,
  api: apiReducer
});

export default rootReducer;