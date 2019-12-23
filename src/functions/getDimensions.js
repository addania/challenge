export const getDimensions = (inputData, inputColumns) => {
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds string values (excluding date formats).
  const output = inputColumns.filter(col => typeof inputData[col] === "string");
  return output;
};
