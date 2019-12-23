export const handleClickHelper = selectedValues => {
  // Function is triggered on every click on the Button Apply component.
  // Sets useFilter state to true when the button Apply was clicked (unless filters are empty).
  if (
    !(
      Object.entries(selectedValues).length === 0 &&
      selectedValues.constructor === Object
    )
  ) {
    const newState = true;
    return [newState, selectedValues];
  } else {
    const newState = false;
    return [newState, 0];
  }
};
