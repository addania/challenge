import React from "react";
import { List } from "../components/List.js";

export const subheaderHelperFunction = (
  dimensions,
  dimensionsLength,
  italicsInput
) => {
  const message = "Select zero to N ";
  const listItems = dimensions.map(item => {
    return (
      <List
        message={message}
        columns={item}
        styling={italicsInput}
        key={item}
      />
    );
  });
  return listItems;
};
