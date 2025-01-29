import React, { useState } from "react";
// import SingleNotes from "./SingleNotes";

///***********useState********************* */
// its use for rendering i want to change every time re-render then react provided useState() function.
// useState()=> give me current and setCureent in array from
// const[current , setCurrent] = useState("value" or [] or {})
// current = value, setCuurent change the value.
// every element we write {} braces bcus expression.
// useState is hook everytime use event occur.
// if i changed properties of object that time use de-structure or spred operator.

function Notes() {
  const [notes, setNotes] = useState([]);
  const [currentnotes, seCurrenttNotes] = useState("");

  // const[car , setCar ] = useState({
  //   car:'suzuki',
  //   model:'suv',
  //   types:'4 wheeler',
  //   color:'red',
  // })

  // function carColorupdate(){

  //   const colorChangeOfCar = {...car,car:'blue'}
  //   setCar(colorChangeOfCar)
  // }

  function updateNotes(event) {
    seCurrenttNotes(event.target.value);
  }

  function addNotes() {
    const currentNotesAdd = [...notes, currentnotes];
    setNotes(currentNotesAdd);
  }

  return (
    <>
      <input type="text" onChange={updateNotes} />
      <button onClick={addNotes}>Sumbit</button>
      {/* <button onChange={carColorupdate}></button> */}

      <ul>
        {notes.map((notes, index) => {
          return <li key={index}>
            <SingleNotes note={notes}/>
            
            {notes}</li>;
        })}
      </ul>
    </>
  );
}

export default Notes;
