import { createRoot } from "react-dom"; // Importa createRoot en lugar de ReactDOM
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import anecdoteReducer from "./reducers/anecdoteReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
  },
});

// Usa createRoot en lugar de ReactDOM.render
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
