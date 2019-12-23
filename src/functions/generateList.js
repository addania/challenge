export const generateList = filterItem => {
  // Receives an array of filter values. Generates a string of maximum 3 values
  // if multiple filter values are selected.
  //console.log("filterItem",filterItem);
  const valuesArray = filterItem.slice(0, 3).map(item => {
    return JSON.stringify(item) + " and ";
  });
  const string = valuesArray.join("");
  if (filterItem.length <= 3) {
    const newString = string.slice(0, -4);
    return newString;
  } else {
    const newString = string.slice(0, -5) + ", etc.";
    return newString;
  }
};
