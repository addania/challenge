export function handleClickHelper(selectedValues) {
  // Function is triggered on every click on the Button Apply component.
  // Sets useFilter state to true when the button Apply was clicked (unless filters are empty).
  let newState;
  if (
    !(
      Object.entries(selectedValues).length === 0 &&
      selectedValues.constructor === Object
    )
  ) {
    newState = true;
    return { applyFilter: newState, filterValue: selectedValues };
  } else {
    newState = false;
    return { applyFilter: newState, filterValue: 0 };
  }
}
