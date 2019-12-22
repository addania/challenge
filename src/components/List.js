import React from "react";

export const List = props => {
  // Defines a list component to be used in Subheader component
  return (
    <li data-testid="list">
      {props.message}
      <span style={props.styling}>{props.columns}s</span>
    </li>
  );
};
