import React from "react";

export const List = ({ message, columns, styling }) => (
  // Defines a list component to be used in Subheader component
  <li data-testid="list">
    {message}
    <span style={styling}>{columns}s</span>
  </li>
);
