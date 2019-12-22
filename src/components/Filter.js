import React from "react";
import { filterHelperFunction } from "../functions/filterHelperFunction";

export function Filter({ styling, filterColumns, onChange, dataSet }) {
  // Defines a filter which allows users to filter data displayed on graph
  // by selecting certain datasources and/or campaigns.
  const columns = filterHelperFunction(filterColumns, onChange, dataSet);

  return (
    <div>
      <h2 style={styling}>Filters</h2>
      {columns}
    </div>
  );
}
