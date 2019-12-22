export function handleChangeHelper(e, data, selectedValues) {
  // Function is triggered on every change of Filter component. Receives information about event as input.
  // Sets selectedValues state with information about which columns and their values were selected.
  // Sets useFilter state to false when new filter was selected but button Apply was not yet clicked.
  let newState = { ...selectedValues };
  if (data.value === undefined || data.value == 0) {
    delete newState[data.placeholder];
  } else {
    let key = data.placeholder;
    newState = Object.assign(newState, { [key]: data.value });
  }
  return newState;
}
