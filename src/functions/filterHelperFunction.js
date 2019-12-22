import React from "react";
import { Dropdown } from "semantic-ui-react";
import { generateOptionsFilter } from "./generateOptionsFilter";

export function filterHelperFunction(filterColumns, onChange, dataSet) {
  const columns = [];

  for (let item = 0; item < filterColumns.length; item++) {
    const genOptions = generateOptionsFilter(filterColumns[item], dataSet);
    columns.push(
      <div key={item}>
        <p style={{ textAlign: "left", color: "#828282", marginTop: "20px" }}>
          {filterColumns[item]}
        </p>
        <Dropdown
          key={item}
          placeholder={filterColumns[item]}
          fluid
          multiple
          selection
          options={genOptions}
          onChange={onChange}
          style={{ marginTop: "5px" }}
        />
      </div>
    );
  }

  return columns;
}
