import React from "react";
import { Dropdown } from "semantic-ui-react";
import { generateFilterOptions } from "./generateFilterOptions";

export const generateFilter = (filterColumns, onChange, dataSet) => {
  return filterColumns.map(item => {
    return (
      <div key={item}>
        <p style={{ textAlign: "left", color: "#828282", marginTop: "20px" }}>
          {item}
        </p>
        <Dropdown
          key={item}
          placeholder={item}
          fluid
          multiple
          selection
          options={generateFilterOptions(item, dataSet)}
          onChange={onChange}
          style={{ marginTop: "5px" }}
        />
      </div>
    );
  });
};
