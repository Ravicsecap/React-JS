import React from "react";
import { useSelector } from "react-redux";

function ListNote() {
  const notes = useSelector((state) => state.notesReducers.notes);
  return (
    <div>
      {notes.map((note) => {
        return (
          <div>
            <p>{note.id}</p>
            <h2>{note.title}</h2>
            <p>{note.dec}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ListNote;
// notes.map((note) => { return <div>

//     <p>{note.id}</p>
//     <h2>{note.title}</h2>
//     <p>{note.dec}</p>

//     </div>
//     })}
