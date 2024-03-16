import React from "react";
import { useSelector } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";

const App = () => {
  const anecdotes = useSelector((state) =>
    state.anecdotes.sort((a, b) => b.votes - a.votes),
  );

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteForm />
      <AnecdoteList anecdotes={anecdotes} />
    </div>
  );
};

export default App;
