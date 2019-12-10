import React from "react";
import { Dropdown } from "semantic-ui-react";

export function Filter({ styling, filterColumns, onChange, dataSet }) {
  // Defines a filter which allows users to filter data displayed on graph
  // by selecting certain datasources and/or campaigns.
  const columns = [];
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  for (let item = 0; item < filterColumns.length; item++) {
    const genOptions = generateOptions(filterColumns[item], dataSet);
    columns.push(
      <div key={item}>
        <p style={{ textAlign: "left", color: "#828282", marginTop: "20px" }}>
          {filterColumns[item]}
        </p>
        <Dropdown
          key={item}
          style={styleLink}
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

function generateOptions(inputItem, inputDataSet) {
  // Receives input data and input item (based on filters) and dynamically generated options to be used for Dropdown component.
  let uniqueValues = [];
  for (let entry = 0; entry < inputDataSet.length; entry++) {
    if (!uniqueValues.includes(inputDataSet[entry][inputItem])) {
      uniqueValues.push(inputDataSet[entry][inputItem]);
    }
  }
  let newOptions = [];
  for (let optionItem = 0; optionItem < uniqueValues.length; optionItem++) {
    let optionRow = {
      key: uniqueValues[optionItem],
      text: uniqueValues[optionItem],
      value: uniqueValues[optionItem]
    };
    newOptions.push(optionRow);
  }
  return newOptions;
}
