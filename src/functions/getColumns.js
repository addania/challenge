export const getColumns = input => {
  // Receives an array of objects as input and outputs an array with unique keys (columns).
  const output = Object.keys(input);
  return output;
};
