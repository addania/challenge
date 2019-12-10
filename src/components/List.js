import React from "react";

export function List(props) {
  // Defines a list component to be used in Subheader component
  return (
    <li>
      {props.message}
      <span style={props.styling}>{props.columns}s</span>
    </li>
  );
}
