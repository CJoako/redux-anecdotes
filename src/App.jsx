import React from "react";
import { useSelector } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
  // Utiliza useSelector para acceder a la lista de anécdotas desde el estado
  const anecdotes = useSelector((state) =>
    state.anecdotes.slice().sort((a, b) => b.votes - a.votes),
  );

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteForm />
      <Notification />
      <AnecdoteList anecdotes={anecdotes} />
    </div>
  );
};

export default App;
