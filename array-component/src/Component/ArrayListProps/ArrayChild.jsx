import React from "react";

const ArrayChild = (props) => {
  return (
    <div>
      <ul>
        <li>{props.data.name}</li>
        <li>{props.data.surname}</li>
        <li>{props.data.mobile_no}</li>
        <li>{props.data.email_id}</li>
      </ul>
    </div>
  );
};

export default ArrayChild;
