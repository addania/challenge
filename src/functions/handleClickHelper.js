export function handleClickHelper(selectedValues) {
  // Function is triggered on every click on the Button Apply component.
  // Sets useFilter state to true when the button Apply was clicked (unless filters are empty).
  if (
    !(
      Object.entries(selectedValues).length === 0 &&
      selectedValues.constructor === Object
    )
  ) {
    return { applyFilter: true, filterValue: selectedValues };
  } else {
    return { applyFilter: false, filterValue: 0 };
  }
}
