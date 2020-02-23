import React from "react";
import { Dropdown } from "semantic-ui-react";

export const Filters = ({ styling, filterColumns, onChange, dataSet }) => (
  // Defines a filter which allows users to filter data displayed on graph
  // by selecting certain datasources and/or campaigns.
  <div data-testid="filter">
    <h2 style={styling}>Filters</h2>
    {filterColumns.map(item => (
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
    ))}
  </div>
);

export const generateFilterOptions = (inputItem, inputDataSet) => {
  // Receives input data and input item (based on filters) and dynamically generated options to be used for Dropdown component.
  const uniqueValues = [...new Set(inputDataSet.map(item => item[inputItem]))];
  return uniqueValues.map(item => ({
    key: item,
    text: item,
    value: item
  }));
};
