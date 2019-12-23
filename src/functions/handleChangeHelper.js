export const handleChangeHelper = (e, data, selectedValues) => {
  // Function is triggered on every change of Filter component. Receives information about event as input.
  // Sets selectedValues state with information about which columns and their values were selected.
  // Sets useFilter state to false when new filter was selected but button Apply was not yet clicked.

  if (data.value === undefined || data.value.length === 0) {
    const newState = { ...selectedValues };
    if (data.placeholder === "Campaign") {
      const { Campaign, ...newArray } = newState;
      return newArray;
    } else if (data.placeholder === "Datasource") {
      const { Datasource, ...newArray } = newState;
      return newArray;
    }
  } else {
    const newState = { ...selectedValues };
    const updatedState = Object.assign(newState, {
      [data.placeholder]: data.value
    });
    return updatedState;
  }
};
