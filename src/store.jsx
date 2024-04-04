import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer, { setAnecdotes } from "./reducers/anecdoteReducer"; // Importa setAnecdotes
import notificationReducer from "./reducers/notificationReducer";
import anecdoteService from "./services/anecdotes";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
  },
});

anecdoteService.getAll().then((anecdotes) => {
  store.dispatch(setAnecdotes(anecdotes)); // Envía la lista completa de anécdotas
});

export default store;
