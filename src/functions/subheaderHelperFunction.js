import React from "react";
import { List } from "../components/List.js";

export function subheaderHelperFunction(
  dimensions,
  dimensionsLength,
  italicsInput
) {
  const message = "Select zero to N ";
  const listItems = [];
  for (let listItem = 0; listItem < dimensionsLength; listItem++) {
    listItems.push(
      <List
        message={message}
        columns={dimensions[listItem]}
        styling={italicsInput}
        key={listItem}
      />
    );
  }
  return listItems;
}
