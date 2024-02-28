// rootReducer.js
import { combineReducers } from "redux";
import anecdoteReducer from "./anecdoteReducer";
import filtersReducer from "./filtersReducer";

const rootReducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filtersReducer,
});

export default rootReducer;
