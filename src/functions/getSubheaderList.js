import React from "react";
import { List } from "../components/List.js";
export const getSubheaderList = (dimensions, italicsInput) => {
  return dimensions.map(item => {
    return (
      <List
        message="Select zero to N "
        columns={item}
        styling={italicsInput}
        key={item}
      />
    );
  });
};
