import React from "react";

function ListbyProps(props) {
  return (
    <div className="lisNotes">
      <h1>{props.notes}</h1>
    </div>
  );
}

export default ListbyProps;
