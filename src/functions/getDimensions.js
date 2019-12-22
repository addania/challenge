import _ from "lodash";

export const getDimensions = (inputData, inputColumns) => {
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds string values (excluding date formats).
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    const col = inputColumns[item];
    if (_.isString(inputData[col])) {
      output.push(col);
    }
  }
  return output;
};
