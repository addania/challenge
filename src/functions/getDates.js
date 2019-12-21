import _ from "lodash";

export function getDates(inputData, inputColumns) {
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds date values.
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    const col = inputColumns[item];
    if (_.isDate(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}
