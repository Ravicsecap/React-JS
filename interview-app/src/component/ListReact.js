import React, { useState } from "react";

function ListReact() {
  const [notes, setNotes] = useState([]);
  const [currentNotes, setCurrenttNotes] = useState("");

  function writeInput(e) {
    setCurrenttNotes(e.target.value);
  }

  function addnote(e) {
    const updateNote = [...notes, currentNotes];
    setNotes(updateNote);
  }

  return (
    <div>
      <input type="text" onChange={writeInput} />
      <button onClick={addnote}>Click</button>
      <ul>
        {notes.map((notes, index) => {
          return <li key={index}>{notes}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListReact;
