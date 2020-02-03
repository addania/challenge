export const getDimensions = (inputData, inputColumns) =>
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds string values (excluding date formats).
  inputColumns.filter(column => typeof inputData[column] === "string");
