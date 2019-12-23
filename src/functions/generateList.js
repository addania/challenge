export const generateList = filterItem => {
  // Receives an array of filter values. Generates a string of maximum 3 values
  // if multiple filter values are selected.
  //console.log("filterItem",filterItem);
  let string = "";
  for (let entry = 0; entry < filterItem.length && entry < 3; entry++) {
    string = string + JSON.stringify(filterItem[entry]) + " and ";
  }
  //console.log("string", string);
  if (filterItem.length <= 3) {
    const newString = string.slice(0, -4);
    return newString;
  } else {
    const newString = string.slice(0, -5) + ", etc.";
    return newString;
  }
};
