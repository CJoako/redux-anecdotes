import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNewAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(addAnecdote(content));
    event.target.anecdote.value = ""; // Limpiar el campo después de agregar
  };

  return (
    <>
      <h2>Create new</h2>
      <form onSubmit={addNewAnecdote}>
        <input name="anecdote" />
        <button type="submit">Add Anecdote</button>
      </form>
      <br />
    </>
  );
};

export default AnecdoteForm;
