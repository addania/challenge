import React from "react";
import { generateFilter } from "../functions/generateFilter";

export const Filter = ({ styling, filterColumns, onChange, dataSet }) => (
  // Defines a filter which allows users to filter data displayed on graph
  // by selecting certain datasources and/or campaigns.
  <div data-testid="filter">
    <h2 style={styling}>Filters</h2>
    {generateFilter(filterColumns, onChange, dataSet)}
  </div>
);
