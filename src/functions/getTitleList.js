export const getTitleList = filterItem => {
  // Receives an array of filter values. Generates a string of maximum 3 values
  // if multiple filter values are selected.
  const valuesArray = filterItem.slice(0, 3).map(item => {
    return JSON.stringify(item) + " and ";
  });
  if (filterItem.length <= 3) {
    return valuesArray.join("").slice(0, -4);
  } else {
    return valuesArray.join("").slice(0, -5) + ", etc.";
  }
};
