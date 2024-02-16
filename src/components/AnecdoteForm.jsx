import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNewAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(addAnecdote(content));
    // Limpia el formulario u realiza otras acciones necesarias
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <input name="anecdote" />
        <button type="submit">Add Anecdote</button>
      </form>
      <br />
    </>
  );
};

export default AnecdoteForm;
