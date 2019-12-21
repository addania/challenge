export function generateList(filterItem) {
  // Receives an array of filter values. Generates a string of maximum 3 values
  // if multiple filter values are selected.
  let string = "";
  let newString;
  for (let entry = 0; entry < filterItem.length && entry < 3; entry++) {
    string = string + JSON.stringify(filterItem[entry]) + " and ";
  }

  if (filterItem.length <= 3) {
    newString = string.slice(0, -4);
  } else {
    newString = string.slice(0, -5) + ", etc.";
  }
  return newString;
}
