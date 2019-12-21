import React from "react";
import { Dropdown } from "semantic-ui-react";
import { generateOptionsFilter } from "../functions/generateOptionsFilter";

export function Filter({ styling, filterColumns, onChange, dataSet }) {
  // Defines a filter which allows users to filter data displayed on graph
  // by selecting certain datasources and/or campaigns.
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
  return (
    <div>
      <h2 style={styling}>Filters</h2>
      {columns}
    </div>
  );
}
