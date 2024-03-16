import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
