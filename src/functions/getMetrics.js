export const getMetrics = (inputData, inputColumns) =>
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds numeric values.
  inputColumns.filter(
    column => typeof inputData[column] === "number" && column !== "Date"
  );
