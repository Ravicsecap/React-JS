import React from "react";
import { useState } from "react";
import { notes } from "../slices/notesSliceList";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function Note() {
  const [title, setTitle] = useState("");

  const [dec, setDec] = useState("");

  const dispatch = useDispatch();

  function handlerSubmit(e) {
    e.preventDefault();
    dispatch(
      notes({
        title, //title:title we write this

        dec,

        id: nanoid(10),
      })
    );
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripation"
          onChange={(e) => setDec(e.target.value)}
        />

        {/* < type="submit" onClick={handlerSubmit} /> */}

        <button onClick={handlerSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Note;
