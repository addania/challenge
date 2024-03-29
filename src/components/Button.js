import * as React from "react";
import "./Button.css";

export const Button = ({ onClick }) => (
  // Defines a button Apply to apply selected filter options on Chart component
  <button
    data-testid="button"
    type="submit"
    style={{
      backgroundColor: "#8DA1B9",
      color: "white",
      borderRadius: "2px",
      width: "80px",
      padding: "5px 0px",
      position: "left",
      marginTop: "10px"
    }}
  >
    <span onClick={onClick}>Apply</span>
  </button>
);
