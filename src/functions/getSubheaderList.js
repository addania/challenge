import React from "react";
import { List } from "../components/List.js";

export function getSubheaderList(dimensions, dimensionsCount, italicsInput) {
  const listItems = [];
  for (let listItem = 0; listItem < dimensionsCount; listItem++) {
    listItems.push(
      <List
        message="Select zero to N "
        columns={dimensions[listItem]}
        styling={italicsInput}
        key={listItem}
      />
    );
  }
  return listItems;
}
