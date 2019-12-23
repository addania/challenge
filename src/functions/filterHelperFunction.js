import React from "react";
import { Dropdown } from "semantic-ui-react";
import { generateOptionsFilter } from "./generateOptionsFilter";

export const filterHelperFunction = (filterColumns, onChange, dataSet) => {
  const getColumns = item => {
    const genOptions = generateOptionsFilter(item, dataSet);
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
          options={genOptions}
          onChange={onChange}
          style={{ marginTop: "5px" }}
        />
      </div>
    );
  };
  const columns = filterColumns.map(getColumns);
  return columns;
};
