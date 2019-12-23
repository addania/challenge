import _ from "lodash";

export const getMetrics = (inputData, inputColumns) => {
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds numeric values.
  const output = inputColumns.filter(col => _.isNumber(inputData[col]));
  return output;
};
